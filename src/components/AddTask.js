import React, { useState } from 'react'
import '../App.css'
import {DateTimePickerComponent} from "@syncfusion/ej2-react-calendars";




function AddTask({ onAdd }) {
    const [text, setText] = useState('')
    let  [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
   // console.log(">>>",day.toString())

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Please add a task')
            return
        }
   
        day = day.toLocaleString({timeZone: 'Asia/Kolkata'})
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)

    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value.toString())}
                    type="text"
                    placeholder='Add Task' />
            </div>
            <div className="form-control ">
                <label>Day & Time </label>
                <DateTimePickerComponent
               
                onChange={(e) => setDay(e.target.value)}
                value={day}
                format="dd-MMM-yy HH:mm"
                placeholder="Select Date and Time"></DateTimePickerComponent>
                {/* <input
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    type="date"
                    placeholder='Add Day & Time' /> */}
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input className="btn btn-block" type="submit" value='Save Task' />
        </form>

        // <form className='add-form' onSubmit={onSubmit}>
        //     <div className="form-control">
        //         <input
        //             value={text}
        //             onChange={(e) => setText(e.target.value)}
        //             type="text"
        //             placeholder='Add Task' />
        //     </div>
        // </form>


    )
}

export default AddTask