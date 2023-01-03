import { Container } from "react-bootstrap"

const val = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const img = ["m","b","p","f"]

export const Shot = (props) => {
    
    if(img.includes(val[0].toLowerCase())) {
        if(val === "bird"||val === "birds") {
            props.ch = "p"
        } else if(val === "best dishes") {
            props.ch = "f"
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
                                            <img src={require(`./Images/${props.ch}${i}.jpg`)} alt="Not Found"></img>
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
