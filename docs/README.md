# Table of features

* [Users](Users)
* [Teams](Teams)
* [Tournaments](Tournaments)

<br>

# Tournaments Features

### **`# Create Tournament`**

A tournament is created so users can join using a team.  
A team has 5 members and once one member join, the others   
4 members has 1h to join. If the team members didn't pay  
the tournament fee, they won't be able to join. 

**Given** I am an staff user  
**When** I fill up the tournament form and submit  
**Then** I should see a new tournament created  

<br>

### **`# Team Member join in tournament`**

***Scenario: The first user join in a tournament***

**Given** I am a team member  
**And** No one has joined in a tournament yet  
**When** I click to join in a tournament  
**Then** I should be included to the tournament invite stage  
**And** All the others member of my team should be notified  

***Scenario: The second user join in a tournament***

**Given** I am a team member  
**When** I click to join in a tournament  
**Then** I should be included to the tournament invite stage

<br>

### **`# Team member accepts a tournament invite`**

**Given** An invite is sent to all team members  
**When** A team member accepts the invite  
**Then** The Invite Staged table should be opdated  
**And** The tournament page should show a new user accepted 

<br>

### **`# Team member cancel his tournament`**

***Scenario: All members has accepted the tournament invite***

**Given** A member accepts a tournament invite  
**And** All the others members has also accepted  
**When** The member cancels his entry within 10min  
**Then** the hole team get off of the tournament  
**And** All the members gets their credits back

***Scenario: Not all members has accepted the tournamente invite***

**Given** A member accepts a tournament invite  
**When** The this or other member cancels his entry within 10min  
**Then** The left member still can back to the tournament within 15min

<br>

### **`# Team has joined in a tournament`**

**Given** A tournament is created  
**When** All members has joined in the tournament  
**Then** The team should appear in the tournament  
**Then** All members should have a tournament key after 10min
**Then** All members should be charged the entry fee  

<br>

### **`# Team has left a tournament`**

**Given** A tournament is created  
**Given** All members has joined in the tournament  
**When** A team member left the tournament within 10min
**Then** The team should NOT appear in the tournament  

<br>

### **`# Tournament has started`**

**Given** A tournament is created  
**When** The due date comes  
**Then** A tournament should change the phase  
**And** No teams can join  
**Then** The tracking results process starts