//take the numbers from 1st to 6th position and show the 4 numbers
export const shortenAddress = (address) => `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
