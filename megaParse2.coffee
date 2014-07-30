prop =
    title: "Shadow of the Colossus"
    developer: "Sony Japan"
    publisher: "SCEA"
    platform: "Playstation 2"
    players: 1
    online_access: false
    released: 2005
    esrb_rating: "T"

megaParse = (s) ->
  obj = JSON.parse s
  console.log "Length: " + Object.keys(obj).length
  for key, value of obj
    console.log("The name #{key} has the value of #{obj[key]}")
  obj

string = JSON.stringify(prop)
megaParse(string)
