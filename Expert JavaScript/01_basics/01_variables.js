const accountId = 144553; // constant variable, cannot be reassigned
let accountEmail = "hitesh@google.com"; // block-scoped variable, can be reassigned
var accountPassword = "12345"; // function-scoped variable, can be reassigned
accountCity = "Jaipur"; // global variable, implied global declaration (avoid using this)

let accountState; // block-scoped variable, currently undefined

// accountId = 2; // not allowed (const can't change)

accountEmail = "hc@hc.com"; // reassignment is allowed
accountPassword = "21212121"; // reassignment is allowed
accountCity = "Bengaluru"; // reassignment is allowed

console.log(accountId); // outputs: 144553

// Prefer not to use (var) because of issues with block scope and function scope

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]); // displays values in a table format

/*
 ***** NOTES *****
 (1)    var
 Purpose: declare variables
 Scope: aghr function k inder declare hai tu function scope. aghr function k baher declare hai tu global scope
 Hoisting: scope k top pr (top to its scope)
 Usage: scope related bugs ki waja se esy zada use nahi krty

 (2)    let
 Purpose: declare block-scope variables
 Scope: block-scope ({...})
 Hoisting: block k top pr (top to its block)
 Usage: esy variables jinko dobara value assign ho saky

 (3) const
 Purpose: declare block-scope constants
 Scope: block-scope ({...})
 Hoisting: block k top pr (top to its block)
 Usage: esy varibales jinki value change na ho or reassign na ho
*/
