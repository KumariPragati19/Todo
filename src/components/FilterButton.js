function FilterButton(props){
  const isActive = props.currentFilter === props.name ? true : false;
    return(
        <button type="button" className={`btn toggle-btn ${isActive ? "active" : ""}`} onClick={() => props.setFilter(props.name)}>
          
          <span>{props.name}</span>
          
        </button>
    );
}
 export default FilterButton;