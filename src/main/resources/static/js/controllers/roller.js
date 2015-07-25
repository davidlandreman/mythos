app.service("Roller", function() {
	
	this.getCoreRoll = function(){
		var roll = {sum:0, exploit:false, mythic:false, rolled_1:0, rolled_2:0, rolled_3:0, rolled_4:0, exploit_number : null};
		for(i=0;i<4;i++){
			die_roll=Math.floor(Math.random()*4)+1;
			roll.sum+=die_roll;
			roll["rolled_"+die_roll]+=1;
		}
		for(i=0;i<4;i++){
			if(roll["rolled_"+i]>=3){
				roll.exploit = true;
				if(roll["rolled_"+i]>=4){
					roll.mythic = true
				}
			}
			roll.expoit_number = i;
		}
		return roll;
		
	}
	
	this.specialRoll = function(sides, number){
		var roll = {sum:0, rolls:[]}
		if (sides <= 1 || number <= 1){
			return null;
		}
		for(i=0;i<number;i++){
			die_roll=Math.floor(Math.random()*sides)+1;
			roll.sum+=die_roll;
			roll.rolls.push(die_roll);
		}
		return roll;
	}
	
});