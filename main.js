
playing = false
time = 600
prev_time = -600

function start(){
    end()
    var endDate = new Date().getTime() + (time)*1000+300;
    playing = true
    var timer = setInterval(function() {
        if (playing == true && new Date().getTime() <= endDate ){
            let now = new Date().getTime();
            let time_elepsed = endDate - now;
            let time_elepsed_seconds = Math.floor(time_elepsed/1000)- Math.floor(time_elepsed/ (1000 * 60 * 60 * 24))
            update_time(time_elepsed_seconds)
        }
        else{
            clearInterval(timer);
        }
    }, 50);
}

function end(){
    time = collect_input()
    playing = false
    update_time(time)
}

function pause_unpause(){
    if (playing == true){
        document.getElementById('anim_dot').style.animationName = 'shrink'
        document.getElementById('anim_dot').style.backgroundColor = 'Var(--foreground)'
        end()
    }
    else{
        document.getElementById('anim_dot').style.animationName = 'expand'
        document.getElementById('anim_dot').style.backgroundColor = 'Var(--midground)'
        start()
    }
}

function collect_input(){
    input = document.getElementById('timer').value
    input_array = input.split(':');
    let seconds = parseInt(input_array[input_array.length-1],10)
    if (input_array.length >= 2){
        seconds += parseInt(input_array[input_array.length-2],10) * 60
        if (input_array.length >= 3){
            seconds += parseInt(input_array[input_array.length-3],10) * 3600
        }
    }
    return seconds
}

function update_time(_temp_time, _skip = false){
    if (playing === false && _skip === false){
        document.getElementById('title').textContent = 'Focus Timer- Paused'
    }
    else{
        if (_temp_time != prev_time){
            prev_time = _temp_time
            time_string = ''
            temp_time = _temp_time
            if (temp_time>= 60){
                if (temp_time>= 3600){
                    time_string = time_string + String(Math.floor(temp_time/3600)) + ':'
                    temp_time -= (Math.floor(temp_time/3600))*3600
                    if (Math.floor(temp_time/60) < 10){
                        time_string = time_string + '0' + String(Math.floor(temp_time/60)) + ':'
                    }
                    else{
                        time_string = time_string + String(Math.floor(temp_time/60)) + ':'
                    }
                }
                else{
                    time_string = time_string + String(Math.floor(temp_time/60)) + ':'
                }
                temp_time -= Math.floor(temp_time/60)*60
                if (temp_time < 10){
                    time_string = time_string + '0' + String(temp_time)
                }
                else{
                    time_string = time_string + String(temp_time)
                }
            }
            else{
                time_string = time_string + String(temp_time)
            }
            document.getElementById('timer').value = time_string
            if (_skip != true){
                document.getElementById('title').textContent = 'Focus Timer- ' + time_string
            }
            time = collect_input()
            console.log(time)
            document.cookie = 'time =' + String(time)
        }
    }
}

document.addEventListener("click", (evt) => {
    const timer = document.getElementById("timer");
    const dot = document.getElementById("dot");
    const anim_dot = document.getElementById("anim_dot");
    
    let El = evt.target;
    if(El === timer) {
        document.getElementById('anim_dot').style.animationName = 'shrink'
        document.getElementById('anim_dot').style.backgroundColor = 'Var(--foreground)'
        end()
    }
    else if (El === dot){
        pause_unpause()
    }
    else if (El === anim_dot){
        pause_unpause()
    }
    else{
        time = collect_input()
        update_time(time)
    }
});

document.addEventListener("keydown", (evt) => {
    if (evt.repeat === true){
        return
    }
    else if (evt.code === 'Space'){
        pause_unpause()
    }
});

document.addEventListener('focus', (evt) => {
    const timer = document.getElementById("timer");
    let El = evt.target;
    if (El === timer){
        document.getElementById('anim_dot').style.animationName = 'shrink'
        document.getElementById('anim_dot').style.backgroundColor = 'Var(--foreground)'
        end()
    }
});


addEventListener('DOMContentLoaded', (evt) => {
    resize()
    console.log('loaded')
    if (document.cookie != ''){
        console.log(document.cookie)
        time = parseInt(document.cookie.split('=')[1])
        console.log(time)
    }
    update_time(time, true)
});

addEventListener('resize', (evt) => {
    resize()
});

function resize() {
    if (window.innerHeight >= window.innerWidth/0.75){
        document.documentElement.style.setProperty('--expanded_size_vertical', '300vh')
        document.documentElement.style.setProperty('--diameter', '100vw')
        document.documentElement.style.setProperty('--text_size', '35vw')
    }
    else {
        document.documentElement.style.setProperty('--expanded_size_vertical', '100vw')
        document.documentElement.style.setProperty('--diameter', '75vh')
        document.documentElement.style.setProperty('--text_size', '26vh')
    }
}

/*
function arc_end(_angle){
    let angle = _angle
    document.getElementById('end').style.mozTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.msTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.oTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.transform = 'rotate('+String(angle)+' deg)';
}*/