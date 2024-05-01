time = 600

function start(){
    var endDate = new Date().getTime() + time*1000;

    var timer = setInterval(function() {
        let now = new Date().getTime();
        let time_elepsed = endDate - now;
        let time_elepsed_seconds = Math.floor(time_elepsed/1000)- Math.floor(time_elepsed/ (1000 * 60 * 60 * 24))
        update_time(time_elepsed_seconds)        
    }, 1000);
}

function end(){
    update_time(time)
}

function update_time(_temp_time){
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
    document.getElementById('timer').innerHTML = time_string
}

/*
function arc_end(_angle){
    let angle = _angle
    document.getElementById('end').style.mozTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.msTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.oTransform = 'rotate('+String(angle)+' deg)';
    document.getElementById('end').style.transform = 'rotate('+String(angle)+' deg)';
}*/