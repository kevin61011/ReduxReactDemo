export const addMoney = money => ({
  type: 'ADD_MONEY',
  money
});

export const spendMoney = money => ({
  type: 'SPEND_MONEY',
  money
});

export const changeGame = game => ({
  type: 'CHANGE_GAME',
  game
});

export const gameTypes = {
  SLOT_MACHINE: "SLOT_MACHINE",
  ROULETTE:"ROULETTE"
}

export const modifyMyFavorite = game => ({
  type: "MODIFY_MY_FAVORITE",
  game
});