class LocalStorageService {
    readonly key: string;

    constructor(key: string) {
        this.key = key;
    }

    set(value: string) {
        localStorage.setItem(this.key, value);
    }

    get(): string | null {
        return localStorage.getItem(this.key);
    }

    clear() {
        localStorage.removeItem(this.key);
    }
}

export const UserIdStorage = new LocalStorageService('userId');
export const UsernameStorage = new LocalStorageService('username');