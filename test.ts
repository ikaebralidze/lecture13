import {
  concat,
  concatMap,
  concatMapTo,
  filter,
  from,
  interval,
  map,
  Observable,
  observable,
  of,
  timer,
} from "rxjs";

// N1
const a$ = of(1, "aa", 3);
const b$ = of(4, 5, "bb");

const c$ = concat(a$, b$).pipe(
  map((x) => {
    if (typeof x === "number") {
      return x * 10;
    } else {
      return `${x}${x}`;
    }
  })
);

c$.subscribe((x) => console.log(x));

// N2

const endLess$ = interval(1000).pipe(
  filter((x) => x % 2 === 0),
  map((x) => x * 2)
);

endLess$.subscribe((x) => console.log(x));

// N3

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

function getUsers() {
  const users$ = of(
    {
      firstName: "giorgi",
      lastName: "bazerashvili",
      age: 25,
    },
    {
      firstName: "meore",
      lastName: "giorgi",
      age: 17,
    }
  );

  const timmer$ = timer(5000)
    .pipe(
      concatMapTo(users$),
      filter((x) => x.age > 18)
    )
    .subscribe((x) => console.log(`${x.firstName} ${x.lastName} ${x.age}`));
}

getUsers();
