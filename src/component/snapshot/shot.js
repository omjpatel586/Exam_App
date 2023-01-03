import { Container } from "react-bootstrap"

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const img = ["m","b","p","f"]

export const Shot = (props) => {
    let ch = ""
    if(img.includes(props.val[0].toLowerCase())) {
        if(props.val === "bird"||props.val === "birds") {
            ch = "p"
        } else if(props.val === "best dishes") {
            ch = "f"
        } else {
            ch = img[img.indexOf(props.val[0].toLowerCase())]
        }
    }
    return (
        <>
            <div>
                <h1>{props.val} Pictures</h1>
                <Container>
                    <div className="btn-image">
                        {
                            val.map((i) => {
                                return (
                                    <>
                                        <div className="image">
                                            <img src={require(`./Images/${ch}${i}.jpg`)} alt="Not Found"></img>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </Container>
            </div>
        </>
    )
}