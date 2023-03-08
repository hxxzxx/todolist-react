
const TitleDate = () => {
    const dt = `${new Date().getMonth()+1}월 ${new Date.getDate()}일`;

    return
    (  
        <div>
            <h1>{dt}</h1>
        </div>
    );
}

export default TitleDate;