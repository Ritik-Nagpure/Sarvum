import { appendFileSync } from 'fs';

/**
 * Logs a message with timestamp to log.txt
 * @param message - The message to log
 */
export function logMessage(message: string): void {
  const timestamp = new Date().toISOString();
  const logEntry = `[${timestamp}] ${message}\n`;

  try {
    appendFileSync('log.txt', logEntry, 'utf8');
    console.log('Logged:', logEntry.trim());
  } catch (error) {
    console.error('Failed to write to log file:', error);
  }
}
