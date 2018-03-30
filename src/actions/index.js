export const addMoney = money => ({
  type: 'ADD_MONEY',
  money
});

export const spendMoney = money => ({
  type: 'SPEND_MONEY',
  money
});

export const placeBet = bet => ({
  type: 'PLACE_BET',
  bet
});

export const changeGame = game => ({
  type: 'CHANGE_GAME',
  game
});

export const gameTypes = {
  SLOT_MACHINE: "SLOT_MACHINE",
  ROULETTE:"ROULETTE"
}

export const deletedFromMyFavorite = game => ({
  type: "DELETED_FROM_MY_FAVORITE",
  game
});

export const addedToMyFavorite = game => ({
  type: "ADDED_TO_MY_FAVORITE",
  game
});