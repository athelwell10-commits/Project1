'use strict';

// HomeScreen component with leak detection features
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = () => {
    const [leakDetected, setLeakDetected] = useState(false);

    useEffect(() => {
        // Simulate leak detection functionality
        const leakSimulation = setInterval(() => {
            const detection = Math.random() > 0.5; // Randomly detect leak
            setLeakDetected(detection);
        }, 5000);

        return () => clearInterval(leakSimulation);
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>LeakGuard HomeScreen</Text>
            {leakDetected ? (
                <Text style={styles.alert}>Leak Detected!</Text>
            ) : (
                <Text style={styles.normal}>No Leaks Detected.</Text>
            )}
            <Button title="Check Status" onPress={() => alert('Checking leak status...')} />
        </View>
    );
};

// InsightsScreen component with statistics
const InsightsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Leak Insights</Text>
            <Text>Number of leaks detected: 5</Text>
            <Text>Average detection time: 2 minutes</Text>
            <Text>Last leak detected on: 2026-04-20</Text>
        </View>
    );
};

// Utility functions for leak detection
const calculateLeakRisk = (leakCount) => {
    return leakCount > 3 ? 'High Risk' : 'Low Risk';
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    alert: {
        color: 'red',
        fontSize: 18,
        margin: 10,
    },
    normal: {
        color: 'green',
        fontSize: 18,
        margin: 10,
    },
});

export { HomeScreen, InsightsScreen, calculateLeakRisk };