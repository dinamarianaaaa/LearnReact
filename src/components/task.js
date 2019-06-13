import React, { Component } from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Task extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
        return(
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover'}} > React Project #1</CardTitle>
            <CardText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque molestie, lectus et maximus malesuada, justo mi condimentum velit, porttitor laoreet turpis lacus vitae purus. 
            </CardText>
            <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
            </Card>
        )
    } else if (this.state.activeTab === 1) {
        return (
            <div><h1>This is Angular</h1></div>
        )
    } else if (this.state.activeTab === 2) {
        return (
            <div><h1>This is VueJS</h1></div>
        )
    } else if (this.state.activeTab === 3) {
        return (
            <div><h1>This is MongoDB</h1></div>
        )
    }
}

    render() {
        return (
        <div className="category-tabs">   
            <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Angular</Tab>
                <Tab>VueJS</Tab>
                <Tab>MongoDB</Tab>
            </Tabs>

            <section className="task-grid">
                <Grid className="task-grid">
                    <Cell col={12}>
                        <div className="content"> {this.toggleCategories()}</div>
                    </Cell>
                </Grid>
                {this.toggleCategories()}
            </section>
        </div>
        )
    }
}

    export default Task;