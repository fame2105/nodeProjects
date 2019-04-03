const doWorkCallback = (callback) => {
    setTimeout(() => {
        // callback('This is my error!', undefined)
        callback(undefined, [1, 4, 7])
    }, 2000)
}

doWorkCallback((error, result) => {
    if (error) {
        return console.log(error)
    }
    const data = result.filter((num)=>{
        return num>3;
        
    })
    console.log(data);
    
    // console.log(result)
});


const remainingTasks = (callback) => {
    setTimeout(() => {
        const tasks = ['task 1', 'tasks 2', 'tasks3']    
        callback(tasks);
    }, 2500)
}

remainingTasks((data) =>{
    console.log(data);
});

