import React, {Component} from 'react';

import Auxi from '../../hoc/Auxi/Auxi';
import AddButton from '../../components/UI/AddButton/AddButton';
import Card from '../../components/Card/Card';
import BackDrop from '../../components/UI/Backdrop/Backdrop';
import Schedule from '../../components/Schedule/Schedule';
import AddSchedule from '../../components/AddSchedule/AddSchedule';
import SubTopicForm from '../../components/SubTopicForm/SubTopicForm';
import SubScheduleCard from '../../components/Schedule/SubScheduleCard/SubScheduleCard';
import MainCard from '../../components/MainCard/MainCard';

import classes from './Instructor.module.css';

class Instructor extends Component {

    state={
        schedules:[
            //Demo Data
            // {
            //     id:0,
            //     topic:"ravinder",
            //     date:"08-09-0034"
            // }

        ],
        subSchedules:[
            {
                id:0,
                data:[
                    // Demo Data
                    // {
                    //     subTopic:'Interactive Introduction to SQL ',
                    //     time:'9am',
                    //     concepts:["Create Table","Insert Data","Selecting Data" ,"Updating Data"]
                    // },
                    // {
                    //     subTopic:'Interactive Introduction to SQL ',
                    //     time:'10am',
                    //     concepts:["Create Table","Insert Data","Selecting Data" ,"Updating Data"]
                    //}
                ]
            }
        ],
        addSchedule:false,
        addSubSchedule:true,
        visibleSubSchedule:false,
        visibleSubScheduleCards:false,
        showSubSchedule:true,
        addingOnNewSchedule:false,
        editMode:false,
        subTopicEditMode:true,
        clickedSchedule:0,
        clickedScheduleObject:{},
        clickedSchedule2:{},
        // Temp form data
        formData:{
            topic:'',
            date:''
        },
            // Subtopic temp form data
            subTopic:'',
            time:'',
            concepts:[],
        
        newAddedSchedule:{},

        viewStudent:false,
        viewInstructor:false


    }

    scheduleFormHandler = () => {
        this.setState({addSchedule: true})
    }

    removeScheduleFormHandler = () => {
        this.setState({addSchedule:false})
    }

    addScheduleHandler = () => {
        let currid;
        if(this.state.clickedScheduleObject.id != null){
            
            currid= this.state.clickedScheduleObject.id;
            let scheduleobject = {
                id:currid,
                topic: this.state.formData.topic || this.state.clickedScheduleObject.topic,
                date:this.state.formData.date || this.state.clickedScheduleObject.date
            }
            let i = this.state.schedules.findIndex(item => {
                return item.id === currid;
            })
            let tempS = this.state.schedules;
            let obj = scheduleobject;
            tempS.splice(i,1, obj);
            this.setState({
                schedules:tempS, 
                editMode:false,
                clickedScheduleObject:{}
                
            });
            

        }else{
            if(this.state.schedules.length <1){
                currid=0;
            }else{
                currid= this.state.schedules[this.state.schedules.length-1].id+1 ;
                // currid= currid +  this.state.formData.topic +this.state.formData.date;
                
            }
            let scheduleobject = {
                id:currid,
                topic: this.state.formData.topic,
                date:this.state.formData.date
            }
            const updatesSchedules = this.state.schedules;
            updatesSchedules.push(scheduleobject);
            this.setState({
                schedules: updatesSchedules, 
                addSchedule:false, 
                newAddedSchedule:scheduleobject,
                visibleSubSchedule:true,
                addingOnNewSchedule:true
            })
        }

        

        // let arr = this.state.schedules;
        // arr.sort(function(a,b){
        //     // Turn your strings into dates, and then subtract them
        //     // to get a value that is either negative, positive, or zero.
        //     return  new Date(a.date)-new Date(b.date);
        //   })
        // this.setState({schedules:arr})
        // console.log(this.state.schedules)
    }

    topicChangeHandler = (e) => {
        const oldstate = this.state;
        oldstate.formData.topic = e.target.value;
        const updatedstate = oldstate;
        this.setState({formData:updatedstate.formData})
    }
    
    dateChangeHandler = (e) => {
        const oldstate = this.state;
        oldstate.formData.date = e.target.value;
        const updatedstate = oldstate;

        this.setState({formData: updatedstate.formData});
    }

    removeSubScheduleHandler = () => {
        this.setState({visibleSubSchedule:false})
    }

    // openScheduleHandler = () => {
    //     this.setState({showSubSchedule:true})
    // }

    removeSubSchedule = () => {
        this.setState({visibleSubScheduleCards:false})
    }

    timeChangedHandler = (e) => {
        const old = this.state;
        old.time = e.target.value;
        const updated = old;
        this.setState({time: updated.time})
    }

    subTopicChangedHandler= (e) => {
        const old = this.state;
        old.subTopic = e.target.value;
        const updated = old;
        this.setState({subTopic: updated.subTopic})
    }

    conceptsChangedHandler = (e) => {
        let currstate = this.state.concepts;
        let concepts = e.target.value;
        concepts = concepts.split(',');
        currstate = concepts;
        this.setState({concepts:currstate});
    }

    subTopicFormSubmitHandler = () => {
        let currid;
        if(this.state.addingOnNewSchedule){
            currid = this.state.newAddedSchedule.id;
            
            // console.table(currid)
        }else{
            currid =this.state.clickedSchedule
            // console.table(currid)
        }
        let subTopicFormData = {
            time:this.state.time,
            subTopic:this.state.subTopic,
            concepts:this.state.concepts
        }
        let currformdata = subTopicFormData;
        let currstate = this.state.subSchedules;
        let index =currstate.findIndex(item=> {
            return item.id === currid;

        })
        if(index !== -1){
            currstate[index].data.push(currformdata);
        }else{
            let obj ={
                id:currid,
                data:[currformdata]
            }
            currstate.push(obj);
        }
        this.setState({
            subSchedules:currstate,
            visibleSubSchedule:false,
            addingOnNewSchedule:false
        });

        
        // let arr = this.state.subSchedules;
        // arr[currid].data.sort(function (a, b) {
        //     return new Date('1970/01/01 ' + a.time) - new Date('1970/01/01 ' + b.time);
        //   })
        // this.setState({subSchedules:arr})


    }

    openSubScheduleHandler= (e,id) => {
        this.setState({
            visibleSubScheduleCards:true,
            clickedSchedule:id
        })
    }

    openSubScheduleFormHandler = () => {
        this.setState({visibleSubSchedule:true})
    }

    deleteScheduleHandler = (e, id) =>{
        let tempSub = this.state.subSchedules;
        let index= tempSub.findIndex(item => {
            return item.id === id;
        })
        tempSub.splice(index,1);
        let tempSchedule = this.state.schedules;
        let sindex =tempSchedule.findIndex(item => {
            return item.id=== id;
        })

        tempSchedule.splice(sindex,1);
        this.setState({schedules:tempSchedule, subSchedules:tempSub})
    }

    editScheduleHandler = (e,id) => {
        let tempSchedules = this.state.schedules;
        // let scheduleForEdit  =tempSchedules.map(item => {
        //     if(item.id === id){
        //         return item;
        //     }
                
            
        // })
        let i = tempSchedules.findIndex(item => {
            return item.id ===id;
        })

        let scheduleForEdit = tempSchedules[i];
        this.setState({
            clickedScheduleObject:scheduleForEdit,
            editMode:true
        });
        //console.log(id)
        // console.log(i, "index")
        // console.log(scheduleForEdit)
       
    }

    removeEditModeHandler = () => {
        this.setState({editMode:false})
    }

    deleteSubScheduleHandler= (e, time) => {
        let id= this.state.clickedSchedule;
        let old = this.state.subSchedules;
        let index= old.findIndex(item => {
            return item.id === id;
        })
        let subtopicindex =old[index].data.findIndex(i => {
            return i.time === time;
        })
        old[index].data.splice(subtopicindex, 1);
        this.setState({subSchedules:old})
        // console.log(subtopicindex)
        
    }


    removesubTopicEditModeHandler =() => {
        this.setState({subTopicEditMode:false})
    }


    viewHandler= () => {
        this.setState({
            viewStudent:false,
            viewInstructor:false
        })
    }

    openInstructorHandler = () => {
        this.setState({
            viewInstructor:true,
            viewStudent:false
        })
    }

    openStudentHandler = () => {
        this.setState({
            viewInstructor:false,
            viewStudent:true
        })
    }

    render(){

        const studentScheduleCards = this.state.schedules.map((schedule) => {
            return (<Card
                        size= {{
                            width:"100%"
                        }}
                        nobutton = "student"
                        openSchedule = {(e) => {this.openSubScheduleHandler(e,schedule.id)}}
                        key={schedule.id} 
                        details={schedule} 
                        />
            )
        })


        const scheduleCards = this.state.schedules.map((schedule) => {
            return (<Card
                        editSchedule= {(e) => {this.editScheduleHandler(e, schedule.id)}}
                        deleteSchedule = {(e) => {this.deleteScheduleHandler(e, schedule.id)}}
                        openSchedule = {(e) => {this.openSubScheduleHandler(e,schedule.id)}}
                        key={schedule.id} 
                        details={schedule} 
                        />
            )
        })
        let loadId=this.state.clickedSchedule;
        let loadSubSchedules;
        if(loadId >-1  && this.state.subSchedules[loadId]){
            let scheduleState = this.state.subSchedules[loadId].data;
            loadSubSchedules = scheduleState.map((item,index) =>{
                return <SubScheduleCard
                            key={index}
                            details = {item} 
                        >
                            <AddButton
                                position = {{
                                    width:"30px",
                                    height:"30px",
                                    position:"relative",
                                    float:"right",
                                    backgroundColor:"red",
                                }}
                                pPosition={{
                                    fontSize:"20px"
                                }}
                                clicked ={(e) => {this.deleteSubScheduleHandler(e,item.time)}}
                            >x
                            </AddButton>
                        </SubScheduleCard>
            })
        }

        let loadStudentSubSchedules;
        if(loadId >-1  && this.state.subSchedules[loadId]){
            let scheduleState = this.state.subSchedules[loadId].data;
            loadStudentSubSchedules = scheduleState.map((item,index) =>{
                return <SubScheduleCard
                            key={index}
                            details = {item} 
                        >
                            
                        </SubScheduleCard>
            })
        }


        let viewContent
         if(this.state.viewInstructor === false && this.state.viewStudent===false){
               viewContent = (<Auxi>
                    <MainCard
                        position= {{
                            position:"fixed",
                            top:"30%",
                            left:"20%"
                        }}
                        clicked = {this.openInstructorHandler}
                    >
                        <p>Instructor</p>
                    </MainCard>
                    <MainCard
                        position= {{
                            position:"fixed",
                            top:"30%",
                            left:"50%"
                        }}
                        clicked = {this.openStudentHandler}
                    >
                        <p>Student</p>
                    </MainCard>
               </Auxi>)
        }else if(this.state.viewInstructor === true && this.state.viewStudent === false){
            viewContent =( <Auxi>
                                <AddButton
                                        position = {{position:"fixed", top:"90%", left:"95%"}}
                                        clicked = {this.scheduleFormHandler} 
                                        >+</AddButton>
                                    <div className={classes.Container} >
                                        <Auxi>
                                            <BackDrop 
                                                show= {this.state.addSchedule}
                                                hide= {this.removeScheduleFormHandler}
                                                />
                                            <AddSchedule
                                                dateChanged= {this.dateChangeHandler}
                                                topicChanged = {this.topicChangeHandler}
                                                newSchedule = {this.addScheduleHandler}
                                                show= {this.state.addSchedule}
                                                />
                                        </Auxi>
                                        {scheduleCards}
                                        <Auxi>
                                            <BackDrop 
                                                css= {{zIndex:"100000"}}
                                                show= {this.state.visibleSubSchedule}
                                                hide = {this.removeSubScheduleHandler}
                                                />
                                            <SubTopicForm 

                                                submitted = {this.subTopicFormSubmitHandler}
                                                timeChanged ={this.timeChangedHandler}
                                                subTopicChanged ={this.subTopicChangedHandler}
                                                conceptsChanged = {this.conceptsChangedHandler}
                                                show= {this.state.visibleSubSchedule}  />
                                        </Auxi>
                                        <Auxi>
                                            <BackDrop 
                                                show={this.state.visibleSubScheduleCards}
                                                hide={this.removeSubSchedule}
                                                />
                                            <Schedule 
                                                currSchedule = {this.state.schedules[this.state.clickedSchedule]} 
                                                show ={this.state.visibleSubScheduleCards}
                                                >
                                                {loadSubSchedules}
                                                <AddButton
                                                    clicked = {this.openSubScheduleFormHandler}
                                                    position = {{
                                                        position:"relative", 
                                                        marginLeft:"20px", 
                                                        marginTop:"80px", 
                                                        backgroundColor:"rgb(223, 171, 81)" }} 
                                                    >+</AddButton>
                                            </Schedule>
                                        </Auxi>
                                        <Auxi>
                                            <BackDrop 
                                                show={this.state.editMode}
                                                hide={this.removeEditModeHandler}
                                                />
                                            <AddSchedule 
                                                dateChanged= {this.dateChangeHandler}
                                                topicChanged = {this.topicChangeHandler}
                                                newSchedule = {this.addScheduleHandler}
                                                inputDetails = {this.state.clickedScheduleObject}
                                                show={this.state.editMode}
                                            />

                                        </Auxi>
                                    </div>
                            </Auxi>)
        }else if(this.state.viewInstructor === false && this.state.viewStudent === true){
            viewContent = (<Auxi>
                                    <div className={classes.Container} >
                                        <Auxi>
                                            <BackDrop 
                                                show= {this.state.addSchedule}
                                                hide= {this.removeScheduleFormHandler}
                                                />
                                            <AddSchedule
                                                dateChanged= {this.dateChangeHandler}
                                                topicChanged = {this.topicChangeHandler}
                                                newSchedule = {this.addScheduleHandler}
                                                show= {this.state.addSchedule}
                                                />
                                        </Auxi>
                                        {studentScheduleCards}
                                        <Auxi>
                                            <BackDrop 
                                                css= {{zIndex:"100000"}}
                                                show= {this.state.visibleSubSchedule}
                                                hide = {this.removeSubScheduleHandler}
                                                />
                                            <SubTopicForm 

                                                submitted = {this.subTopicFormSubmitHandler}
                                                timeChanged ={this.timeChangedHandler}
                                                subTopicChanged ={this.subTopicChangedHandler}
                                                conceptsChanged = {this.conceptsChangedHandler}
                                                show= {this.state.visibleSubSchedule}  />
                                        </Auxi>
                                        <Auxi>
                                            <BackDrop 
                                                show={this.state.visibleSubScheduleCards}
                                                hide={this.removeSubSchedule}
                                                />
                                            <Schedule 
                                                currSchedule = {this.state.schedules[this.state.clickedSchedule]} 
                                                show ={this.state.visibleSubScheduleCards}
                                                >
                                                {loadStudentSubSchedules}
                                                {/* <AddButton
                                                    clicked = {this.openSubScheduleFormHandler}
                                                    position = {{
                                                        position:"relative", 
                                                        marginLeft:"20px", 
                                                        marginTop:"80px", 
                                                        backgroundColor:"rgb(223, 171, 81)" }} 
                                                    >+</AddButton> */}
                                            </Schedule>
                                        </Auxi>
                                        <Auxi>
                                            <BackDrop 
                                                show={this.state.editMode}
                                                hide={this.removeEditModeHandler}
                                                />
                                            <AddSchedule 
                                                dateChanged= {this.dateChangeHandler}
                                                topicChanged = {this.topicChangeHandler}
                                                newSchedule = {this.addScheduleHandler}
                                                inputDetails = {this.state.clickedScheduleObject}
                                                show={this.state.editMode}
                                            />

                                        </Auxi>
                                    </div>
                            </Auxi>)
        }



        return(
            <Auxi>
                <AddButton
                    position={{
                        position:"fixed",
                        width:"150px",
                        top:'5%',
                        left:"5%",
                        height:"40px",
                        backgroundColor:"brown"
                    }}
                    pPosition={{
                        fontSize:"30px"
                    }}
                    clicked={this.viewHandler}
                >
                    Back
                </AddButton>

                {viewContent}
            </Auxi>
        );
    }
}


export default Instructor;