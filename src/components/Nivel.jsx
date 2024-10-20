function Nivel (props){

return <h1>{props.nivel == "iniciante"? "Bem-Vindo, iniciante": props.nivel == "intermediario" ?"Você está progredindo":"Parabéns, especialista!" }</h1>

}
 export default Nivel 