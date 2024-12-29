// const permission_btn = document.getElementsByClassName('permission_btn')
const No = document.getElementById('No')
const Yes = document.getElementById('Yes')
const UserInput = document.getElementById('name')
const Age = document.getElementById('age')
const Email = document.getElementById('email')
const Phone_num = document.getElementById('Phone_num')
const Message = document.getElementById('msg')
const Data = document.getElementById('data')

const button = document.getElementById('btn')


let MyArr = [];
let EditIndex = null;
// let MyObj;

loopMyArr()

button.addEventListener('click', (e) => {
    e.preventDefault()

    if (UserInput.value === '') {
        alert('Please enter your name.');
    } else if (Age.value === '') {
        alert('Please enter your Age.');
    } else if (Email.value === '') {
        alert('Please enter your Email.');
    } else if (Phone_num === '') {
        alert('Please enter your Phone number.');
    } else {
        var MyObj = {
            UserInput: UserInput.value,
            Age: Age.value,
            Email: Email.value,
            Phone_num: Phone_num.value
        }


    }
    if (EditIndex === null) {
        MyArr.push(MyObj)
    } else {
        MyArr.splice(EditIndex, 1, MyObj)
        EditIndex = null
    }
    loopMyArr()
})

function loopMyArr() {
    let loopData = ''
    MyArr.forEach((val, i) => {
        loopData +=
            `
            <tr>
                <td>${i + 1}</td>
                <td>${val.UserInput}</td>
                <td>${val.Age}</td>
                <td>${val.Email}</td>
                <td>${val.Phone_num}</td>
                <td>
                    <button onclick="DeleteData(${i})" class="Delete_btn">Delete</button>
                    <button onclick="EditData(${i})" class="Edit_btn">Edit</button>
                </td>
            </tr>
        `
    })
    Data.innerHTML = loopData
    UserInput.value = ''
    Age.value = ''
    Email.value = ''
    Phone_num.value = ''
}

function DeleteData(i) {
    permission_btn.style.display = 'block'
    permission_btn.style.transition = '0.7s ease-in-out'

    Yes.addEventListener('click', () => {
        MyArr.splice(i, 1)
        permission_btn.style.display = 'none'
        loopMyArr()
    })

    No.addEventListener('click', () => {
        MyArr.splice(i, 0)
        permission_btn.style.display = 'none'
        loopMyArr()
    })
}

function EditData(i) {
    EditIndex = MyArr[i]

    UserInput.value = EditIndex.UserInput
    Age.value = EditIndex.Age
    Email.value = EditIndex.Email
    Phone_num.value = EditIndex.Phone_num

}

