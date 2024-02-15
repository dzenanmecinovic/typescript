/* *-*-*-*-*-*-*-*-*-*-* Challenge 2 ------------------
Write a function that takes an object type with one property of
online (type boolean) as argument and simply returns the whether the user is online or offline
*/

function isOnline({ online }: { online: boolean }): boolean {
  return online;
}

console.log(isOnline({ online: true }));
