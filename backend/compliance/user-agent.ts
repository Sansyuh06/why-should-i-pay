// User-Agent management
import { BOT_USER_AGENT, BROWSER_USER_AGENTS } from '../config/constants';

export class UserAgentManager {
    private currentIndex = 0;

    /**
     * Get the ethical bot user agent (for transparent identification)
     */
    getBotAgent(): string {
        return BOT_USER_AGENT;
    }

    /**
     * Get a browser-like user agent (for stealth mode)
     */
    getBrowserAgent(): string {
        const agent = BROWSER_USER_AGENTS[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % BROWSER_USER_AGENTS.length;
        return agent;
    }

    /**
     * Get a random browser user agent
     */
    getRandomBrowserAgent(): string {
        const index = Math.floor(Math.random() * BROWSER_USER_AGENTS.length);
        return BROWSER_USER_AGENTS[index];
    }

    /**
     * Get appropriate user agent based on mode
     */
    getAgent(stealth: boolean = false): string {
        return stealth ? this.getBrowserAgent() : this.getBotAgent();
    }
}

// Singleton instance
export const userAgentManager = new UserAgentManager();
