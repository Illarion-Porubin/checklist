function App() {
  return (
    <div className="wrapper">
        <div class="to-do">
          <h1 class="to-do__title">todos</h1>
          <div class="to-do__list">
            <img width={20} height={10} src="/img/arrow.svg" alt="arrow"/>
            <input class="to-do__list-item" type="text" placeholder="What needs to be done?"></input>
          </div>
          <div class="to-do__board">
              <div class="to-do__board-list-items" data-items="0"><span>1</span>item left</div>
            <label class="to-do__board-check">
              <input class="to-do__board-list-check" type="radio" name="radio-btn" data-items="0"></input>
              <input class="to-do__board-list-check" type="radio" name="radio-btn" data-items="0"></input>
              <input class="to-do__board-list-check" type="radio" name="radio-btn" data-items="0"></input> 
            </label>
            <div class="to-do__board-list-btn">
              <button class="to-do__board-btn">Clear completed</button>
            </div>
          </div>
        </div>   
    </div>
  );
}

export default App;
