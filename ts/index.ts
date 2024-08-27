const world = 'world';

export function hello(who: string = world): string {
  console.log(who);

  return `Hello ${who}! `;
}

hello('Bro');
