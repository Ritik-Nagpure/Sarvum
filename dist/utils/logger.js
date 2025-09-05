import { appendFileSync } from 'fs';
export function logMessage(message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${message}\n`;
    try {
        appendFileSync('log.txt', logEntry, 'utf8');
        console.log('Logged:', logEntry.trim());
    }
    catch (error) {
        console.error('Failed to write to log file:', error);
    }
}
