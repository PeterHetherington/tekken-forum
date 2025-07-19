CREATE TABLE IF NOT EXISTS tekkenPosts (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    title VARCHAR(255) NOT NULL,
    content VARCHAR(255) NOT NULL,
    category INT REFERENCES tekkenCategories(id),
    img VARCHAR(255),
    link VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS tekkenComments(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(255) NOT NULL,
    comment TEXT NOT NULL,
    post_id INT REFERENCES tekkenPosts(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS tekkenCategories (
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO tekkencategories (name) VALUES 
    ('Character'), 
    ('Character Custom'), 
    ('Discussion'), 
    ('Fan Art'), 
    ('Gameplay'), 
    ('Help'), 
    ('Lore'), 
    ('Meme'), 
    ('Patch Notes'), 
    ('Tech & Combos');

INSERT INTO tekkenPosts (title, content, category, img, link) VALUES
-- Character (1)
('Why Heihachi Is Still the GOAT', 'No one embodies Tekken''s legacy like Heihachi. His presence shaped the Mishima saga.', 1, 'https://gaming-cdn.com/images/news/articles/8486/cover/1000x563/heihachi-mishima-gets-a-trailer-for-its-appearance-on-tekken-8-ahead-of-october-3-on-release-cover66f2c87a7ad65.jpg', NULL),
('King''s Grapples Are Pure Art', 'The chain throws are brutal, technical, and satisfying. Who else mains King?', 1, 'https://cdn.dashfight.com/f6597f5a6d214acb6eb268a2bc809368f343f21b.png', NULL),

-- Character Custom (2)
('My Reina as Bayonetta Custom', 'Took me 45 minutes but worth it—she looks fierce and fabulous.', 2, 'https://www.digitaltrends.com/gaming/tekken-8-custom-characters/', NULL),
('Walter White in Tekken 8?', 'Customization mode is wild. I just fought Kratos and Walter White.', 2, 'https://tekken8combo.kagewebsite.com/tpl/img/customization/customization-858/image-858_1.jpg', NULL),

-- Discussion (3)
('Should Devil Jin Be Nerfed?', 'His mixups are insane. Is he too strong or just misunderstood?', 3, 'https://static.wikia.nocookie.net/tekken/images/f/f0/Devil_Jin_TK8_Render.jpg/revision/latest/scale-to-width-down/1000?cb=20240126004007&path-prefix=en', 'https://www.youtube.com/watch?v=2oiGYYewIIs'),
('Tekken 8 Heat System Thoughts', 'I love the aggression but it punishes defense too hard. Anyone else feel this?', 3, 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/11/tekken8heatedit.jpg', NULL),

-- Fan Art (4)
('Reina Fanart I Finished Today', 'Tried a softer palette for her Mishima edge. Feedback welcome!', 4, 'https://www.reddit.com/r/Tekken/comments/17uyokc/reina_fanart_i_finished_earlier_this_day/', NULL),
('Devil Jin Poster Print', 'Made this for the fan art contest—hope it gets featured!', 4, 'https://preview.redd.it/devil-jin-fan-art-wisper-art-v0-jkytczldbjwe1.jpeg?auto=webp&s=06b9ce27e174fe48884e80217dc65a9f1f036373', NULL),

-- Gameplay (5)
('Law''s Wall Carry Is Nuts', 'Just landed a 12-hit combo ending in a wall splat. Tekken 8 feels so fluid.', 5, 'https://www.theouterhaven.net/wp-content/uploads/2023/03/Tekken-8-Marshall-Law-Gameplay-Trailer-header-image.jpg', 'https://www.youtube.com/watch?v=OxeOAREtF2s&pp=0gcJCfwAo7VqN5tD'),
('Heat Dash Is a Game Changer', 'It rewards aggression but also opens up new punish windows.', 5, 'https://www.gamespot.com/a/uploads/original/1574/15747411/4117517-vlcscreenshot2023-03-29-04h20m57s103.jpg', NULL),

-- Help (6)
('Struggling With Sidesteps', 'I keep getting clipped trying to evade. Tips for timing?', 6, 'https://i.ytimg.com/vi/hE0xegZ4b40/maxresdefault.jpg', NULL),
('Beginner Help With Kazuya', 'I love his style but can''t land electrics consistently.', 6, 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/01/tekken8kazuya.jpg', NULL),

-- Lore (7)
('The Mishima Feud Explained', 'From Tekken 1 to 8, this family drama is Shakespearean.', 7, 'https://img.redbull.com/images/c_crop,w_1920,h_960,x_0,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2024/10/1/o7tttoorjfecbzuniv6q/heihachi-tekken-8', 'https://www.youtube.com/watch?v=7_dlHgwAzcU'),
('Leo''s Backstory Is Underrated', 'A quiet character with a tragic past. Deserves more spotlight.', 7, 'https://gaming-cdn.com/images/news/articles/3711/cover/leo-is-back-for-tekken-8-cover655e1871dac4e.jpg', NULL),

-- Meme (8)
('Tekken 8 team trying their best not to copy paste the same character every dlc', '*Insert dramatic explosion gif*', 8, 'https://preview.redd.it/tekken-8-team-trying-their-best-not-to-copy-paste-the-same-v0-eqom0cwbk6cf1.jpeg?width=320&crop=smart&auto=webp&s=ed4c3b26ff0df614e97bb4157599bbd87bfefbcc', NULL),
('One is an imposter', '-_- -_-', 8, 'https://preview.redd.it/one-is-an-imposter-v0-ns2rvghkw2cf1.jpeg?width=1080&crop=smart&auto=webp&s=53526217a87d1c98887c8522500f34bb720c5d8d', NULL),

-- Patch Notes (9)
('Patch 2.02 Nerfs Victor''s Heat Smash', 'Finally! That move was dominating neutral.', 9, 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-keyart-01-en-15may23?$native$', NULL),
('Season 2 Balance Changes Are Live', 'Big buffs for Reina and Dragunov. Time to lab!', 9, 'https://gmedia.playstation.com/is/image/SIEPDC/tekken-8-keyart-01-en-15may23?$native$', NULL),

-- Tech & Combos (10)
('Steve''s CH b1 Combo Cheat Sheet', 'Made a printable guide for consistent damage.', 10, 'https://gaming-cdn.com/images/news/articles/3779/cover/steve-fox-is-back-for-tekken-8-cover6567471e19235.jpg', NULL),
('Reina Heat Dash Combos', 'Masku tech is real—check out this 80+ damage string.', 10, 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/11/tekken-8-reina-fighting-style-explained.jpg', 'https://www.youtube.com/watch?v=paX0t5mtRHI');


INSERT INTO tekkenComments (username, comment, post_id) VALUES
-- Post 1: Heihachi
('MishimaMain', 'Heihachi''s legacy is unmatched—he''s Tekken royalty.', 1),
('PowerCrushFan', 'Wish he were playable in more story arcs.', 1),

-- Post 2: King
('SuplexKing', 'Mastering the chain throws is so rewarding.', 2),
('ChokeSlamChamp', 'Armor King taught me the grappling basics 👊', 2),

-- Post 3: Reina Custom
('CosmicCombo', 'Bayonetta vibes are perfect for Reina''s aesthetic.', 3),
('PixelPunish', 'She looks even cooler than some DLCs tbh.', 3),

-- Post 4: Walter White Custom
('ModMaster', 'Kratos vs Heisenberg in Tekken… what a time to be alive.', 4),
('CostumeCrusader', 'Customization mode feels like a meme factory 😂', 4),

-- Post 5: Devil Jin Nerf?
('SweepsAndBeams', 'His hell sweep into laser pressure is insane.', 5),
('ZenSidestepper', 'He''s strong but beatable with solid reads.', 5),

-- Post 6: Heat System
('WallSplatWizard', 'Heat blows up turtle play. Defense needs love.', 6),
('AggroArtist', 'Tekken 8 feels like offense simulator sometimes.', 6),

-- Post 7: Reina Fanart
('FanBrush', 'Your palette work is subtle but elegant—great job!', 7),
('ArtFightClub', 'This could easily be official concept art.', 7),

-- Post 8: Devil Jin Poster
('FramePainter', 'I''d totally hang this above my battle station.', 8),
('DemonDesigns', 'Perfect mix of chaos and style. Respect!', 8),

-- Post 9: Law's Wall Carry
('ComboBreaker', 'Wall carry makes Law feel top tier now.', 9),
('HitConfirmHero', 'I love finishing with dragon''s tail 😎', 9),

-- Post 10: Heat Dash
('RushDownRuler', 'Great mechanic—makes offense thrilling again.', 10),
('NeutralNinja', 'Needs balancing, but opens creative combos.', 10),

-- Post 11: Sidestep Help
('EvadeMaster', 'Try quarter circle sidestep into block cancel.', 11),
('FuzzyBlocker', 'Practice against Lars and you''ll level up fast.', 11),

-- Post 12: Kazuya Help
('ElectricSoul', 'Took me weeks to land electrics on command.', 12),
('HellSweepHopeful', 'Start slow and use visual markers—helps a lot!', 12),

-- Post 13: Mishima Lore
('DramaDropper', 'Tekken is literally martial arts Shakespeare.', 13),
('FamilyFeudFighter', 'Kazuya vs Heihachi never gets old 🔥', 13),

-- Post 14: Leo Backstory
('QuietStorm', 'Leo''s story is so tragic… easily the most human.', 14),
('BackdashBlues', 'Needs a full cinematic arc in the next game.', 14),

-- Post 15: Meme - DLC Copy Paste
('CloneCruncher', 'Honestly I can''t tell Victor apart from Dragunov 🤣', 15),
('DLCDetective', 'At this point I''m expecting Kuma in a trench coat.', 15),

-- Post 16: Meme - Imposter
('ImposterHunter', 'Top tier meme format, 10/10 execution.', 16),
('DownBackDetective', 'I knew something was off… LOL', 16),

-- Post 17: Patch - Victor Nerf
('NerfNinja', 'Victor needed that nerf since week one.', 17),
('HeatControl', 'Neutral game feels healthier now.', 17),

-- Post 18: Patch - Season 2 Buffs
('BuffBringer', 'Reina''s new strings are spicy!', 18),
('MetaShifter', 'Dragunov finally escaped the shadows 🙌', 18),

-- Post 19: Steve Cheat Sheet
('HitCheckHero', 'Printed your guide—combo execution''s way smoother now.', 19),
('FoxFrameFan', 'Love the visual flowcharts. Steve mains rejoice!', 19),

-- Post 20: Reina Heat Dash Combos
('ReinaRushdown', 'Masku tech unlocked a whole new layer.', 20),
('ComboLabber', 'Landed that 80+ string online yesterday 🔥', 20);
