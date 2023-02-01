import Header from "./Header";
import Timeline from "./Timeline";

const Content = (props) => {
    return (
        <div style={{ width: '80%', backgroundColor: 'lightblue' }}>
            <h3>Dashboard</h3>
            <p>Welcome to the dashboard</p>
            <Header date={props.date}></Header>
            <Timeline></Timeline>

        </div>
    );
};

export default Content