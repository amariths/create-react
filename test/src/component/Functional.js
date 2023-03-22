const hello = 'FF'

const displayMessage = () => {
    return 'vad kul'
}

function Functional() {
    return (
        <>
            <h1 className="title">{hello + ' ' + displayMessage()}</h1>
        </>
    )
}

export default Functional
