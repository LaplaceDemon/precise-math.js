var PreciseMath = {
	rTrim:function(x){
		if(x=="0"){
			return "0";
		}else{
			return x.replace(/(0*$)/g,"");
		}
	},
	moveLeftPoint:function(strIntNum,step){
		if(strIntNum.length>step){
			return strIntNum.substring(0,strIntNum.length-step) + "." + strIntNum.substring(strIntNum.length-step,strIntNum.length);
		}else if(strIntNum.length == step){
			return "0."+strIntNum;
		}else{
			var len = strIntNum.length;
			for(var i=1;i<=step-len;i++){
				strIntNum = "0"+ strIntNum;
			}
			strIntNum = "0."+ strIntNum;
			return strIntNum;
		}
	},
    add:function(x1,x2){
	    x1 = x1.toString();
		x2 = x2.toString();
	    var site_point1 = x1.indexOf(".");
		var site_point2 = x2.indexOf(".");
		
		// 不存在小数点
		if(site_point1<0 && site_point2<0){
		    return parseInt(x1)+parseInt(x2);
		}else{
			var _A = "0";
			var _B = "0";
			var _a = "0";
			var _b = "0";
			
			if(site_point1<0){
				_A = x1;
			}else if(site_point1 == 0){
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1>0 && site_point1 < x1.length-1){
				_A = x1.substring(0,site_point1);
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1 = x1.length-1){
				_A = x1.substring(0,site_point1);
			}
			
			if(site_point2<0){
				_B = x2;
			}else if(site_point2 == 0){
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2>0 && site_point2 < x2.length-1){
				_B = x2.substring(0,site_point2);
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2 = x2.length-1){
				_B = x2.substring(0,site_point2);
			}
			
		    // 点前计算
		    var resultX = parseInt(_A) + parseInt(_B);
			
			// 点后计算
			var len = Math.max(_a.length,_b.length);
			for(var i=0;i<len - _a.length;i++){
			    _a = _a + "0";
			}
			for(var i=0;i<len - _b.length;i++){
			    _b = _b + "0";
			}
			
			var resultx = "0";
			if(parseInt(_a) == 0){
				resultx = _b;
			}else if(parseInt(_b) == 0){
				resultx = _a;
			}else{
			    resultx = parseInt(_a) + parseInt(_b);
			}
			
			var result = PreciseMath.rTrim(resultX+"."+resultx);
			if(result.indexOf(".")==result.length-1){
				return result.substring(0,result.length-1);
			}else{
				return result;
			}
		}
	}
	,
	sub:function(x1,x2){
	    x1 = x1.toString();
		x2 = x2.toString();
	    var site_point1 = x1.indexOf(".");
		var site_point2 = x2.indexOf(".");
		
		// 不存在小数点
		if(site_point1<0 && site_point2<0){
		    return parseInt(x1)+parseInt(x2);
		}else{
			var _A = "0";
			var _B = "0";
			var _a = "0";
			var _b = "0";
			
			if(site_point1<0){
				_A = x1;
			}else if(site_point1 == 0){
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1>0 && site_point1 < x1.length-1){
				_A = x1.substring(0,site_point1);
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1 = x1.length-1){
				_A = x1.substring(0,site_point1);
			}
			
			if(site_point2<0){
				_B = x2;
			}else if(site_point2 == 0){
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2>0 && site_point2 < x2.length-1){
				_B = x2.substring(0,site_point2);
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2 = x2.length-1){
				_B = x2.substring(0,site_point2);
			}
			
		    // 点前计算
		    var resultX = parseInt(_A) - parseInt(_B);
			
			// 点后计算
			var len = Math.max(_a.length,_b.length);
			for(var i=0;i<len - _a.length;i++){
			    _a = _a + "0";
			}
			for(var i=0;i<len - _b.length;i++){
			    _b = _b + "0";
			}
			
			var resultx = "0";
			if(parseInt(_a) == 0){
				resultx = _b;
			}else if(parseInt(_b) == 0){
				resultx = _a;
			}else{
			    resultx = parseInt(_a) - parseInt(_b);
			}
			
			var result = PreciseMath.rTrim(resultX+"."+resultx);
			if(result.indexOf(".")==result.length-1){
				return result.substring(0,result.length-1);
			}else{
				return result;
			}
		}
	},	
	mul:function(x1,x2){
	    x1 = x1.toString();
		x2 = x2.toString();
	    var site_point1 = x1.indexOf(".");
		var site_point2 = x2.indexOf(".");
		
		// 不存在小数点
		if(site_point1<0 && site_point2<0){
		    return parseInt(x1)*parseInt(x2);
		}else{
			var _A = "0";
			var _B = "0";
			var _a = "0";
			var _b = "0";
			
			if(site_point1<0){
				_A = x1;
			}else if(site_point1 == 0){
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1>0 && site_point1 < x1.length-1){
				_A = x1.substring(0,site_point1);
				_a = x1.substring(site_point1+1,x1.length);
			}else if(site_point1 = x1.length-1){
				_A = x1.substring(0,site_point1);
			}
			
			if(site_point2<0){
				_B = x2;
			}else if(site_point2 == 0){
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2>0 && site_point2 < x2.length-1){
				_B = x2.substring(0,site_point2);
				_b = x2.substring(site_point2+1,x2.length);
			}else if(site_point2 = x2.length-1){
				_B = x2.substring(0,site_point2);
			}
			
			// 小数部分 去除尾部0
			_a = PreciseMath.rTrim(_a);
			_b = PreciseMath.rTrim(_b);
			
			var _aPointLen = _a.length;
			var _bPointLen = _b.length;
			
		    // 多项式乘法。
		    var _AB = parseInt(_A) * parseInt(_B);
			var _aB = (parseInt(_a) * parseInt(_B)).toString();
			var _bA = (parseInt(_A) * parseInt(_b)).toString();
			var _ab = (parseInt(_a) * parseInt(_b)).toString();
			
			var strAB = _AB;
			var straB = PreciseMath.moveLeftPoint(_aB,_aPointLen);
			var strbA = PreciseMath.moveLeftPoint(_bA,_bPointLen);
			var strab = PreciseMath.moveLeftPoint(_ab,_aPointLen+_bPointLen);
			
			return PreciseMath.add(PreciseMath.add(PreciseMath.add(strAB,straB),strbA),strab);
		}
	}

}