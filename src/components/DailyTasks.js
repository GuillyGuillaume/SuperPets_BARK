import React, { useState, useEffect } from 'react';

function TaskCard({task}) {
    return (
        <div className="task-card">
            <button className="btn btn-sm btn-warning">Done</button>
            <p>
                {task}
            </p>
        </div>
    );
}

export function DailyTasks(props) {
    const cards = props.tasks.map((task, index) => {
        let taskKey = task + index;
        return <TaskCard task={task} key={taskKey} />
    });

    return (
        <div className="daily-tasks">
            {cards}
        </div>
    );
}