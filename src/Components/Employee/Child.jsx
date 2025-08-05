const Child = (props) => {

    const childData = 'Monu';

    const sendDataToParent = () => {
        console.log(childData);
        props.childDataToParent(childData);
    };


    return (
        <>
            <p>Child Component</p>
            <p>Child data in child component: {childData}</p>
            <p>Parent data in child component: {props.parentDataToChild}</p>
            <button onClick={sendDataToParent}>Send data to parent</button>
        </>
    );

};

export default Child;