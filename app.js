console.log("welcome");

var mass = [1,2,3,4,5,6]

function binS(arr, n) {
  var left = 0;
  var right = arr.length-1;

  while(left <= right) {
    var mid = Math.floor((left + right) /2)
    if(arr[mid] === n) {
      return mid;
    }else if(arr[mid] > n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

// some TS


const isNumber: number = 7;
const items : Array<string> = ['info', 'all', 'extra'] //common type
const items1 : string[] = ['info', 'all', 'extra']
let gender:   'female' | 'male' //like type
//gender = 'test' //theee is an error because it`s like type

type AdressType = {
    city: string
    country : string
}

type Usertype = {
  name: string
  city: string
  showName: (text :string) =>  void //takes and return
  isSamurai: boolean
  adress: AdressType | null
  age? : number //optional
}

let user: Usertype = {
  name: 'Reactjs',
  city: 'NY',
  isSamurai: false,
  showName(text : string)  {
    console.log(text , this.city, this.name)
  },
  adress: {
    city: 'Dream city',
    country: 'Freedom'
  }
}

const initialState = {
  products: [],
  isLoading: false,
  user : null as string | null,
  editID : null as number | null,
  adress : {
    country: null as string | null,
    city: null as string | null
  } as AdressType
}

type InitialStateType = typeof initialState; //make InitialStateType from initialState

const initialState2: InitialStateType = {
  products : [],
  isLoading: true,
  user: null,
  editID : null,
  adress : {
    country : 'Russia',
    city: 'Piter'
  }
} 


//user.showName('hello')
      //------------------------------------
const summ: (a: number, b: number) => number = (a: any, b: any) => a + b;//??? избыточный
const summ1 = (a: number, b: number) => {
  return a + b
}



console.log(summ(4, 1))

let GET_TASKS = 'APP/GetTasks' //action

type GetTaskActionType = {
  type: typeof GET_TASKS // bind string //let gender: 'female' | 'male' //like type
  id: number
}

let action : GetTaskActionType = {
  type: GET_TASKS,
  id: 10
}
function reducer (state = initialState2, action:  ) {
switch(action.type) {
    case GET_TASKS:

  }
}