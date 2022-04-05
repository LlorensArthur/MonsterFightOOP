class Logs{
    currentLogs = [];
    addLog(log){
        this.currentLogs.push(log);
    }

    getLogs(){
        return this.currentLogs;
    }
}

export default Logs;