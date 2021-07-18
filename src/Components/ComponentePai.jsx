import ComponenteFilho from "./ComponenteFilho";

function ComponentePai(props){
    return (
        <div>
            <h2>{props.terceira}</h2>
            <ComponenteFilho 
            quinta={"essa vai p filho a quinta"}
            sexta={props.quarta}
            />
        </div>
    )
}

export default ComponentePai;