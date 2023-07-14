# ## Users ##

# user1 = User.create({
#   username: "noot",
#   password: "woofwoof",
#   password_confirmation: "woofwoof",
#   bio: "Passionate nature enthusiast dedicated to protecting wildlife and conserving ecosystems. Join me in the fight for a greener future!",
#   avatar_url: "https://cache.lovethispic.com/uploaded_images/blogs/10-Beautiful-Nature-Scenes-And-Landscapes-48771-6.jpeg"
# })

# user2 = User.create({
#   username: "sam",
#   password: "rawknroll",
#   password_confirmation: "rawknroll",
#   bio: "Wildlife advocate on a mission to preserve biodiversity. Exploring nature's wonders and inspiring conservation efforts worldwide.",
#   avatar_url: "https://cache.lovethispic.com/uploaded_images/blogs/10-Beautiful-Nature-Scenes-And-Landscapes-48771-9.jpeg"
# })

# ## User_Organizations ##

# user_org1 = UserOrganization.create({
#   user_id: 1,
#   organization_id: 1
# })

# user_org2 = UserOrganization.create({
#   user_id: 1,
#   organization_id: 2
# })

# user_org3 = UserOrganization.create({
#   user_id: 2,
#   organization_id: 3
# })

# user_org4 = UserOrganization.create({
#   user_id: 2,
#   organization_id: 4
# })

# ## Organizations ##

# org1 = Organization.create({
#   name: "WildEarth Alliance",
#   mission: "Working towards protecting and restoring endangered species and their habitats globally.",
#   location: "San Francisco, California, USA"
# })

# org2 = Organization.create({
#   name: "Earth Guardians",
#   mission: "Empowering youth to become environmental leaders and create sustainable change.",
#   location: "Boulder, Colorado, USA"
# })

# org3 = Organization.create({
#   name: "Amazon Rainforest Trust",
#   mission: "Preserving the biodiversity and cultural heritage of the Amazon rainforest through conservation initiatives.",
#   location: "Manaus, Amazonas, Brazil"
# })

# org4 = Organization.create({
#   name: "Wildlife Conservation Society",
#   mission: "Saving wildlife and wild places by implementing science-based conservation efforts worldwide.",
#   location: "New York City, New York, USA"
# })

# org5 = Organization.create({
#   name: "African Wildlife Foundation",
#   mission: "Ensuring the protection of Africa's unique wildlife and wildlands, promoting sustainable development.",
#   location: "Nairobi, Kenya"
# })

# org6 = Organization.create({
#   name: "Great Barrier Reef Foundation",
#   mission: "Collaborating to protect and restore the Great Barrier Reef through innovative research and conservation projects.",
#   location: "Brisbane, Queensland, Australia"
# })

# org7 = Organization.create({
#   name: "International Rhino Foundation",
#   mission: "Dedicated to the survival of the world's rhino species through field programs and community engagement.",
#   location: "Asheville, North Carolina, USA"
# })

# org8 = Organization.create({
#   name: "Sea Turtle Conservancy",
#   mission: "Protecting sea turtles through research, conservation efforts, and community outreach for a healthier marine ecosystem.",
#   location: "Gainesville, Florida, USA"
# })

# ## Projects ##

# proj1 = Project.create({
#   name: "Tiger Conservation Initiative",
#   description: "Collaborating with local communities to protect and restore tiger habitats in Southeast Asia.",
#   location: "Sumatra, Indonesia",
#   start_date: "2023-08-01",
#   end_date: "2024-07-31",
#   organization_id: 1
# })

# proj2 = Project.create({
#   name: "Raptor Rehabilitation Program",
#   description: "Rehabilitating injured raptors and releasing them back into the wild, ensuring their survival.",
#   location: "Rocky Mountains, Colorado, USA",
#   start_date: "2023-09-15",
#   end_date: "2024-03-15",
#   organization_id: 1
# })

# proj3 = Project.create({
#   name: "Plastic Pollution Awareness Campaign",
#   description: "Educating communities about the harmful impacts of plastic pollution and promoting sustainable alternatives.",
#   location: "Coastal regions worldwide",
#   start_date: "2023-07-01",
#   end_date: "2023-12-31",
#   organization_id: 2
# })

# proj4 = Project.create({
#   name: "Urban Garden Initiative",
#   description: "Establishing community gardens in urban areas to promote local food production and reconnect people with nature.",
#   location: "Various cities across the United States",
#   start_date: "2023-08-15",
#   end_date: "2024-08-14",
#   organization_id: 2
# })

# proj5 = Project.create({
#   name: "Rainforest Conservation Patrol",
#   description: "Conducting regular patrols to deter illegal activities and protect the fragile ecosystems of the Amazon rainforest.",
#   location: "Manaus, Amazonas, Brazil",
#   start_date: "2023-09-01",
#   end_date: "2024-08-31",
#   organization_id: 3
# })

# proj6 = Project.create({
#   name: "Indigenous Communities Support Program",
#   description: "Empowering indigenous communities to sustainably manage and preserve their ancestral lands within the Amazon rainforest.",
#   location: "Rondônia, Brazil",
#   start_date: "2023-10-15",
#   end_date: "2024-10-14",
#   organization_id: 3
# })

# proj7 = Project.create({
#   name: "Coral Reef Restoration Project",
#   description: "Restoring damaged coral reefs and implementing measures to mitigate the impacts of climate change.",
#   location: "Great Barrier Reef, Australia",
#   start_date: "2023-08-01",
#   end_date: "2024-07-31",
#   organization_id: 4
# })

# proj8 = Project.create({
#   name: "Anti-Poaching Task Force",
#   description: "Strengthening anti-poaching efforts to combat wildlife trafficking and protect endangered species.",
#   location: "Serengeti National Park, Tanzania",
#   start_date: "2023-09-15",
#   end_date: "2024-03-15",
#   organization_id: 4
# })

# proj9 = Project.create({
#   name: "Elephant Conservation Project",
#   description: "Implementing strategies to address human-elephant conflict and ensure the long-term survival of African elephants.",
#   location: "Amboseli National Park, Kenya",
#   start_date: "2023-07-01",
#   end_date: "2023-12-31",
#   organization_id: 5
# })

# proj10 = Project.create({
#   name: "Sustainable Community Livelihood Program",
#   description: "Supporting local communities in developing sustainable livelihoods that promote conservation and reduce dependence on natural resources.",
#   location: "Okavango Delta, Botswana",
#   start_date: "2023-08-15",
#   end_date: "2024-08-14",
#   organization_id: 5
# })

# proj11 = Project.create({
#   name: "Crown-of-Thorns Starfish Control Program",
#   description: "Controlling the population of crown-of-thorns starfish, a major threat to the health of the Great Barrier Reef.",
#   location: "Cairns, Queensland, Australia",
#   start_date: "2023-09-01",
#   end_date: "2024-08-31",
#   organization_id: 6
# })

# proj12 = Project.create({
#   name: "Climate Change Adaptation Research",
#   description: "Studying the impact of climate change on the Great Barrier Reef and developing strategies for its adaptation and resilience.",
#   location: "Townsville, Queensland, Australia",
#   start_date: "2023-10-15",
#   end_date: "2024-10-14",
#   organization_id: 6
# })

# proj13 = Project.create({
#   name: "Rhino Conservation Monitoring Program",
#   description: "Monitoring rhino populations and implementing conservation measures to protect them from poaching and habitat loss.",
#   location: "Hluhluwe-Imfolozi Park, South Africa",
#   start_date: "2023-08-01",
#   end_date: "2024-07-31",
#   organization_id: 7
# })

# proj14 = Project.create({
#   name: "Rhino Habitat Restoration Initiative",
#   description: "Restoring degraded rhino habitats and ensuring the availability of food and water for the rhino populations.",
#   location: "Kaziranga National Park, India",
#   start_date: "2023-09-15",
#   end_date: "2024-03-15",
#   organization_id: 7
# })

# proj15 = Project.create({
#   name: "Sea Turtle Nesting Beach Protection",
#   description: "Protecting and monitoring sea turtle nesting beaches to ensure successful hatchling emergence.",
#   location: "Tortuguero, Costa Rica",
#   start_date: "2023-07-01",
#   end_date: "2023-12-31",
#   organization_id: 8
# })

# proj16 = Project.create({
#   name: "Sea Turtle Rehabilitation Center",
#   description: "Rehabilitating injured sea turtles and releasing them back into their natural habitats for their long-term survival.",
#   location: "Marathon, Florida, USA",
#   start_date: "2023-08-15",
#   end_date: "2024-08-14",
#   organization_id: 8
# })