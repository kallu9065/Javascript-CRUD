const UserInput = document.getElementById('name')
const Age = document.getElementById('age')
const Email = document.getElementById('email')
const Phone_num = document.getElementById('Phone_num')
const Message = document.getElementById('msg')
const Data = document.getElementById('data')

const button = document.getElementById('btn')

let MyArr = [];
let EditIndex = null;

let MyUser = localStorage.getItem('User')
MyArr = JSON.parse(MyUser)

DisplayData()

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (UserInput.value === '') {
        Message.innerHTML = 'Please Enter your name'
        Message.style.color = 'red'

    } else if (Age.value === '') {
        Message.innerHTML = 'Please Enter your Age'
        Message.style.color = 'red'

    } else if (Email.value === '') {
        Message.innerHTML = 'Please Enter your Email'
        Message.style.color = 'red'

    } else if (Phone_num.value === '') {
        Message.innerHTML = 'Please Enter your Phone_num'
        Message.style.color = 'red'

    } else {
        if (EditIndex === null) {
            MyArr.push({
                name: UserInput.value,
                Age: Age.value,
                Email: Email.value,
                Phone_num: Phone_num.value
            })
            Message.innerHTML = 'Data Added.'
            Message.style.color = 'green'
            UserInput.value = ''
            Age.value = ''
            Email.value = ''
            Phone_num.value = ''
            // console.log(MyArr);

        } else {
            MyArr.splice(EditIndex, 1, {
                name: UserInput.value,
                Age: Age.value,
                Email: Email.value,
                Phone_num: Phone_num.value
            })
            EditIndex = null;
            Message.innerHTML = 'Data Updated.'
            Message.style.color = 'green'
            UserInput.value = ''
            Age.value = ''
            Email.value = ''
            Phone_num.value = ''
        }
    }
    setData(MyArr)
})

function setData(MyArr) {
    let str = JSON.stringify(MyArr)
    localStorage.setItem('User', str)
    DisplayData()
}

function DisplayData() {
    let CollectData = ''
    MyArr.forEach((val, i) => {
        CollectData +=
            `
                <tr id="row">
                    <td>${i + 1}</td>
                    <td>${val.name}</td>
                    <td>${val.Age}</td>
                    <td>${val.Email}</td>
                    <td>${val.Phone_num}</td>
                    <td id="Action_btn">
                        <button onclick="editData(${i})" id="edit">Edit</button>
                        <button onclick="deleteData(${i})" id="delete">Delete</button>
                    </td>
                </tr>
            `
    })
    Data.innerHTML = CollectData;
}

function editData(index) {
    EditIndex = index;

    UserInput.value = MyArr[EditIndex].name
    Age.value = MyArr[EditIndex].Age
    Email.value = MyArr[EditIndex].Email
    Phone_num.value = MyArr[EditIndex].Phone_num
    // console.log(EditIndex);

}

function deleteData(index) {
    MyArr.splice(index, 1)
    alert(`Are sure delete data`)
    Message.innerHTML = 'Data deleted.'
    Message.style.color = 'hotpink'
    setData(MyArr);
}