/**
 * Хранилище состояния приложения
 */
class Store {
  constructor(initState = {}) {
    this.state = initState;
    this.listeners = []; // Слушатели изменений состояния
    this.lastMaxCode = initState.list ?
      Math.max(...initState.list.map(item => item.code))
      : 0;
  }

  /**
   * Подписка слушателя на изменения состояния
   * @param listener {Function}
   * @returns {Function} Функция отписки
   */
  subscribe(listener) {
    this.listeners.push(listener);
    // Возвращается функция для удаления добавленного слушателя
    return () => {
      this.listeners = this.listeners.filter(item => item !== listener);
    }
  }

  /**
   * Выбор состояния
   * @returns {Object}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка состояния
   * @param newState {Object}
   */
  setState(newState) {
    this.state = newState;
    // Вызываем всех слушателей
    for (const listener of this.listeners) listener();
  }

  //
  generateCode() {
    let code = this.lastMaxCode + 1;
    while (this.state.list.find(item => item.code === code)) {
      code++;
    }
    this.lastMaxCode = code;
    return code;
  }

  /**
   * Добавление новой записи
   */
  addItem() {
    this.setState({
      ...this.state,
      list: [...this.state.list,
      {
        // code: ++this.lastMaxCode,
        code: this.generateCode(),
        title: 'Новая запись'
      }]
    })
  };

  /**
   * Удаление записи по коду
   * @param code
   */
  deleteItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.filter(item => item.code !== code)
    })
  };

  /**
   * Выделение записи по коду
   * @param code
   */
  selectItem(code) {
    this.setState({
      ...this.state,
      list: this.state.list.map(item => {
        if (item.code === code) {
          item.selectedCount = (item.selectedCount ?
            item.selected ?
              item.selectedCount
              : item.selectedCount + 1
            : 1);
          item.selected = !item.selected;
        } else if (item.selected) {
          item.selected = false;
        }
        return item;
      })
    })
  }
}

export default Store;
