const title = "Title";
let bool = false;

const renderAPP = () => {
    let switchTitle = () => {
        bool = (bool) ? false : true;
        renderAPP();
    };
    let para = (bool) ? <p>Je suis un paragraphe</p> : null;
    let textButton = (bool) ? <p>Hide</p> : <p>Show</p>;

    const template = (
        <div>
            <h1>{title}</h1>
            <button onClick={switchTitle}>{textButton}</button>
            {para}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderAPP();