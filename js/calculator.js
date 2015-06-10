
 window.Calculator = (function(){


    var memory = 0;
    var total = 0;

    var validate = function(calcFunction){

      return function(n){

        if(arguments.length === 0){

          return calcFunction(n);

        }else if(typeof n !== 'number'){

          return 'Error';
        }else{
          return calcFunction(n);
        }
      }

    }
    
    return{

      load: validate(_load),
      add: _add,
      subtract: _subtract,
      multiply: _multiply,
      divide: _divide,
      getTotal: _getTotal,
      recallMemory: _recallMemory,
      saveMemory: _saveMemory,
      clearMemory: _clearMemory
    }

    function _load(n){
        
        total = n;
        
        return total;
    }

    function _add(n){

      total = this.getTotal() + n;
      memory = total;
      return total;


    }

    function _getTotal(){

      return total;

    }

    function _subtract(n){

        if(typeof n !== 'number'){

        return 'Error';
        }
        total = this.getTotal() - n;
        memory = total;
        return total;

    }

    function _multiply(n){

      if(typeof n !== 'number'){

          return 'Error';
        }
        
      total = this.getTotal() * n;
      memory = total;
      return total;


      
    }

    function _divide(n){
      if(typeof n !== 'number'){

          return 'Error';
        }
        total = this.getTotal() / n;
        memory = total;
        return total;
      
    }

    function _recallMemory(){

        return memory;

      
    }

    function _saveMemory(n){

        memory = total;
        return n;
      
    }

    function _clearMemory(){

      memory = 0;
      
    }

  })();


    

