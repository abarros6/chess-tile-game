export default function Modal ({score}) {
    return (
       
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            {/* <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>open modal</button> */}
            <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl">Game Over</h3>
                <p className="py-4 text-center text-xl font-bold">You scored: {score}</p>
                <div className="modal-action">
                <form method="dialog" className=" ">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                </form>
                </div>
            </div>
            </dialog>
        </>
        
    )
}