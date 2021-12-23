export function Header(props) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.selectedGenre.title}</span>
      </span>
    </header>
  );
}
