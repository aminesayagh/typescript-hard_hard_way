function myLogFunction() {
    return (str: string) => str;
}

function createLoggerClass() {
    return class MyLogger {
        private completeLog: string = '';
        log(str: string) {
            console.log(str);
            this.completeLog += str + '\n';
        }
        dumpLog() {
            return this.completeLog;
        }
    }
}

const MyLogger = createLoggerClass();
const logger2 = new MyLogger();
logger2.log('Foo');

function CreateSimpleMemoryDatabase<T>() {
    return class SimpleMemoryDatabase {
        private db: Record<string, T> = {};
        set(id: string, value: T) {
            this.db[id] = value;
        }
        get(id: string): T {
            if (!(id in this.db)) {
                throw new Error(`${id} not found`);
            }
            return this.db[id] as T;
        }
        getObject(): Record<string, T> {
            return this.db;
        }
    }
}

const StringDatabase = CreateSimpleMemoryDatabase<string>();
const sdb1 = new StringDatabase();
sdb1.set('a', 'hello');
console.log(sdb1.get('a'));

type Constructor<T> = new (...args: any[]) => T;

function Dumpable<T extends Constructor<{ getObject(): object }>>(Base: T) {
    return class Dumpable extends Base {
        dump() {
            return JSON.stringify(this.getObject());
        }
    }
}

const DumpableStringDatabase = Dumpable(StringDatabase);
const sdb2 = new DumpableStringDatabase();
sdb2.set('b', 'world');
console.log(sdb2.dump());

