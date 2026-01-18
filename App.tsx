
import React, { useState, useEffect, useCallback } from 'react';
import { Screen, User, Sample, ActivityLog, SampleStatus } from './types';
import { MOCK_USER, INITIAL_SAMPLES } from './constants';
import Layout from './components/Layout';
import Login from './views/Login';
import Dashboard from './views/Dashboard';
import SampleList from './views/SampleList';
import TestEntry from './views/TestEntry';
import Reports from './views/Reports';
import Profile from './views/Profile';
import NewSampleEntry from './views/NewSampleEntry';

const STORAGE_KEY = 'labtech_samples_v5_final';
const LOG_KEY = 'labtech_activity_v1';
const AUTH_KEY = 'labtech_auth_v1';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem(AUTH_KEY) === 'true';
  });

  const [samples, setSamples] = useState<Sample[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : INITIAL_SAMPLES;
  });

  const [logs, setLogs] = useState<ActivityLog[]>(() => {
    const saved = localStorage.getItem(LOG_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [activeScreen, setActiveScreen] = useState<Screen>('DASHBOARD');
  const [selectedSampleId, setSelectedSampleId] = useState<string | null>(null);
  const [pendingDownloadId, setPendingDownloadId] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(samples));
  }, [samples]);

  useEffect(() => {
    localStorage.setItem(LOG_KEY, JSON.stringify(logs.slice(0, 100)));
  }, [logs]);

  useEffect(() => {
    localStorage.setItem(AUTH_KEY, isLoggedIn.toString());
  }, [isLoggedIn]);

  const addLog = useCallback((type: ActivityLog['type'], message: string) => {
    const newLog: ActivityLog = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toLocaleTimeString(),
      type,
      message,
      technicianId: MOCK_USER.id
    };
    setLogs(prev => [newLog, ...prev]);
  }, []);

  const handleLogin = () => {
    setIsLoggedIn(true);
    addLog('REGISTRATION', `Technician ${MOCK_USER.name} logged in`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveScreen('DASHBOARD');
  };

  const handleUpdateSample = (updatedSample: Sample) => {
    setSamples(prev => {
        const index = prev.findIndex(s => s.id === updatedSample.id);
        if (index !== -1) {
            const next = [...prev];
            next[index] = updatedSample;
            return next;
        } else {
            return [updatedSample, ...prev];
        }
    });

    const old = samples.find(s => s.id === updatedSample.id);
    if (!old) {
       addLog('REGISTRATION', `New Enrollment: ${updatedSample.patientName} (${updatedSample.barcode})`);
    } else if (old.status !== updatedSample.status) {
       addLog('SUBMISSION', `${updatedSample.patientName} status released as ${updatedSample.status}`);
    }
  };

  const navigateToSample = (sample: Sample) => {
    setSelectedSampleId(sample.id);
    setActiveScreen('TEST_ENTRY');
  };

  const triggerDownload = (sample: Sample) => {
    setPendingDownloadId(sample.id);
    setActiveScreen('REPORTS');
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  const selectedSample = samples.find(s => s.id === selectedSampleId) || null;

  const renderScreen = () => {
    switch (activeScreen) {
      case 'DASHBOARD':
        return <Dashboard samples={samples} logs={logs} />;
      case 'SAMPLE_LIST':
        return <SampleList 
          samples={samples} 
          onSelectSample={navigateToSample} 
          onDownloadReport={triggerDownload}
        />;
      case 'NEW_SAMPLE':
        return <NewSampleEntry 
          user={MOCK_USER} 
          onBack={() => setActiveScreen('DASHBOARD')} 
          onSave={(sample) => {
            handleUpdateSample(sample);
          }} 
          onFinish={() => setActiveScreen('SAMPLE_LIST')}
        />;
      case 'TEST_ENTRY':
        return selectedSample ? (
          <TestEntry 
            sample={selectedSample} 
            allSamples={samples}
            onBack={() => {
              setActiveScreen('SAMPLE_LIST');
              setSelectedSampleId(null);
            }} 
            onUpdate={handleUpdateSample}
            onDownloadReport={triggerDownload}
          />
        ) : <Dashboard samples={samples} logs={logs} />;
      case 'REPORTS':
        return <Reports samples={samples} initialDownloadId={pendingDownloadId} />;
      case 'PROFILE':
        return <Profile user={MOCK_USER} samples={samples} logs={logs} onResetData={() => {
           if (window.confirm("Factory reset local database?")) {
              setSamples(INITIAL_SAMPLES);
              localStorage.removeItem(STORAGE_KEY);
           }
        }} />;
      default:
        return <Dashboard samples={samples} logs={logs} />;
    }
  };

  return (
    <Layout
      activeScreen={activeScreen}
      setActiveScreen={setActiveScreen}
      user={MOCK_USER}
      onLogout={handleLogout}
    >
      {renderScreen()}
    </Layout>
  );
};

export default App;
