class Arr {
  len = 0;
  constructor() {
    this.arr = [];
    this.arr = [];
    this.pushOne('first')
    this.unshiftOne('begin');
    this.insertOne('middle', 1);
  }
  
  pushOne(val) { //add end
    this.arr[this.len] = val;
    this.len++;
    return this.arr;
  }

  unshiftOne(val) { //add begin
    const cut = this.arr.slice();
    this.arr = [val].concat(cut);
    this.len++;
    return this.arr;
  }

  shiftOne() {
    this.arr = this.arr.slice(1);
    this.len--;
    return this.arr;
  }

  popOne() {
    this.arr = this.arr.slice(0, this.len - 1);
    
    this.len--;
    return this.arr;
  }
  
  
  deleteOne(pos) {
    if(!this.arr.length) throw Error('nothing to delete')
    const start = this.arr.slice(0, pos);
    const end = this.arr.slice(pos + 1);
    this.arr = start.concat(end);
    this.len--;
    return this.arr;
  }

  deleteFromTo(start, end) { //1 , 3
    if(!this.len) throw Error('nothing to delete')
    if(end > this.len - 1 || !start && !end) throw Error('no way')

    const begin = this.arr.slice(0, start);
    const finish = this.arr.slice(end + 1);
    this.arr = begin.concat(finish);
    return this.arr;
  }

  insertOne(val, pos) {
    if(this.len <= 1) throw Error('operation is cancelled')
      
    //if(pos === 0) return this.unshiftEl(val);
      
    const ins = [val];
    const start = this.arr.slice(0, pos);
    const end = this.arr.slice(pos);
    this.arr = start.concat(ins).concat(end);
    this.len++;
    return this.arr;
  }

  insertSome(pos, ...val) {
    if(this.len <= 1 || pos > this.len) throw Error('operation is cancelled')
    const start = this.arr.slice(0, pos);
    const end = this.arr.slice(pos);
    this.arr = start.concat(val).concat(end);
    this.len += val.length;
    return this.arr;
  }

  clearArr() {
    this.arr = [];
    this.len = 0;
  }
  
}