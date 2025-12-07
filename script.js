// Game State
let currentMode = ''; // 'solo' or 'duo'
let currentZone = 0;
let score = 0;
let totalZones = 5;

// Funny Landing Quotes
const landingQuotes = [
    "Friendship is like peeing your pants—everyone sees it, but only you feel the warmth. 😂",
    "If you have one true friend, you're richer than most. But if they steal your fries? You're DEAD. 💀",
    "Best friends: Because who else will help hide the body? 🔪",
    "Strangers are just friends you haven't awkwardly waved at yet. 👋",
    "Real friends don't judge you... they judge OTHER people WITH you! 😈",
    "A true friend will bail you out of jail. A best friend will be sitting next to you saying 'That was EPIC!' 🚓"
];

// Zone Configuration with 5 CRAZY Questions Each
const zones = [
    {
        title: 'Stranger Zone 😶',
        desc: 'Barely know each other? Awkward waves and zero inside jokes.',
        questions: [
            {
                q: "How many times have you waved at them from across the room?",
                options: [
                    "Zero—do they even exist? (0)",
                    "Once, by accident, then panicked (2)",
                    "Multiple times with eye contact (4)",
                    "I wave EVERY day like a stalker (5)"
                ]
            },
            {
                q: "Their full name? You...",
                options: [
                    "Had to Google it just now (0)",
                    "Remember... kinda... maybe (2)",
                    "Know it but spell it wrong (4)",
                    "Yell it across the hallway like a boss (5)"
                ]
            },
            {
                q: "You see them in public. You...",
                options: [
                    "Pretend you're blind and walk away (0)",
                    "Quick nod, no eye contact (2)",
                    "Say hi awkwardly (4)",
                    "Run over and start conversation (5)"
                ]
            },
            {
                q: "Do you follow them on social media?",
                options: [
                    "Who even are they? (0)",
                    "I've seen their profile once (2)",
                    "Yes, but I never like anything (4)",
                    "I comment on everything like family (5)"
                ]
            },
            {
                q: "If they disappeared tomorrow, you'd...",
                options: [
                    "Not even notice for months (0)",
                    "Think 'huh, haven't seen them' (2)",
                    "Wonder where they went (4)",
                    "Start a search party immediately (5)"
                ]
            }
        ],
        passScore: 15,
        result: {
            title: '🚫 Stuck in Stranger Zone!',
            desc: 'Oof, you two are basically ghosts to each other! Time to actually say hi instead of stalking from afar. Fun fact: First impressions last 7 seconds—go make one!',
            tip: '💡 Tip: Wave with a weird face next time. Instant conversation starter!',
            gif: 'https://media.giphy.com/media/3o7aDgf143NK0dN3Fe/giphy.gif'
        },
        passResult: {
            title: '✅ Stranger Zone CLEARED! 👋',
            desc: "You escaped the void! You're not total strangers anymore—congrats on knowing their name!",
            tip: '🎯 Level up: Learn their coffee order and blow their mind!',
            gif: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif'
        }
    },
    {
        title: 'Chill Friends 🙂',
        desc: 'Ok ok—casual hangs, no deep dives.',
        questions: [
            {
                q: "Shared snacks? They...",
                options: [
                    "Stare hungrily like a dog (0)",
                    "Politely decline (fake smile) (3)",
                    "Offer a bite back (fair trade) (5)",
                    "Steal half of yours without asking (6)"
                ]
            },
            {
                q: "Group chat vibes?",
                options: [
                    "Ghost mode activated 👻 (0)",
                    "Reads but never replies (3)",
                    "Likes your memes occasionally (5)",
                    "STARTS the chaos at 3 AM (6)"
                ]
            },
            {
                q: "You send them a meme. They...",
                options: [
                    "Leave you on read (emotional damage) (0)",
                    "Reply 'lol' 6 hours later (3)",
                    "Send a better one back (5)",
                    "Already sent you the SAME meme yesterday (6)"
                ]
            },
            {
                q: "Weekend plans together?",
                options: [
                    "What plans? (0)",
                    "Maybe in a group setting (3)",
                    "Yeah, if nothing better comes up (5)",
                    "Already booked every Saturday (6)"
                ]
            },
            {
                q: "They post a cringe photo. You...",
                options: [
                    "Scroll past quickly (0)",
                    "Pity like it (3)",
                    "Comment something supportive (5)",
                    "Screenshot and roast in DMs (true friendship) (6)"
                ]
            }
        ],
        passScore: 20,
        result: {
            title: '❌ Chill Denied—Back to Basics!',
            desc: "Still lukewarm? Not hot, not cold—just... there. Time to heat it up or freeze out!",
            tip: '💡 Tip: Share a Spotify playlist—music bonds brains faster than trauma!',
            gif: 'https://media.giphy.com/media/26ufnwz3wDUllvH0U/giphy.gif'
        },
        passResult: {
            title: '✅ Chill Zone UNLOCKED! ❄️',
            desc: "You're comfy now—like old sneakers or a worn hoodie. Not exciting, but reliable!",
            tip: '🎯 Pro move: Plan a lazy movie night with zero effort required.',
            gif: 'https://media.giphy.com/media/l0HlRnAWXxn0MhKLK/giphy.gif'
        }
    },
    {
        title: 'Besties 🤝',
        desc: 'Strong friendship—roasts and rescues.',
        questions: [
            {
                q: "They bail you out of...",
                options: [
                    "Nothing yet (fair weather friend) (0)",
                    "Awkward small talk situations (4)",
                    "Bad dates and family drama (7)",
                    "Actual jail (no questions asked) (8)"
                ]
            },
            {
                q: "Your deepest secrets? They...",
                options: [
                    "Would leak them for $5 (0)",
                    "Might accidentally tell someone (4)",
                    "Guard them like treasure (7)",
                    "Use them for epic blackmail (lovingly) (8)"
                ]
            },
            {
                q: "You ugly cry in front of them. They...",
                options: [
                    "Get super uncomfortable and leave (0)",
                    "Pat your back awkwardly (4)",
                    "Ugly cry WITH you (solidarity) (7)",
                    "Film it for future roast material (8)"
                ]
            },
            {
                q: "Inside jokes between you two?",
                options: [
                    "What jokes? (0)",
                    "One or two references (4)",
                    "Several that confuse others (7)",
                    "You speak a whole different language now (8)"
                ]
            },
            {
                q: "You show up at their house unannounced...",
                options: [
                    "They call the cops (0)",
                    "Confused but lets you in (4)",
                    "Expected behavior, grabs snacks (7)",
                    "Already has your favorite drink ready (8)"
                ]
            }
        ],
        passScore: 25,
        result: {
            title: '❌ Bestie Block—Try Harder!',
            desc: "Close, but no high-five yet. You're like... good friends, but not BEST friends. Ouch.",
            tip: '💡 Tip: Vulnerability builds trust—spill ONE tea and watch magic happen!',
            gif: 'https://media.giphy.com/media/3o7TKsQ7Yx0gOxxpDS/giphy.gif'
        },
        passResult: {
            title: '✅ Besties BONDED! ✊',
            desc: "You're an unbreakable duo now—like Batman and Robin, but better dressed!",
            tip: '🎯 Epic idea: Start an annual roast battle tradition.',
            gif: 'https://media.giphy.com/media/26BRv0KDVuJq2m0Cu/giphy.gif'
        }
    },
    {
        title: 'Crush Mode 😳',
        desc: 'Maybe more than friends? Blushes incoming.',
        questions: [
            {
                q: "Eye contact with them lasts...",
                options: [
                    "0.5 seconds (too intense) (0)",
                    "Normal time, nothing weird (5)",
                    "Flirty stares across the room (8)",
                    "Lost in time, forgot your name (9)"
                ]
            },
            {
                q: "They mention their ex. You feel...",
                options: [
                    "Nothing, couldn't care less (0)",
                    "Mildly interested in the gossip (5)",
                    "Slight side-eye jealousy (8)",
                    "Full plot twist BETRAYAL mode (9)"
                ]
            },
            {
                q: "You stalk their social media...",
                options: [
                    "Never, I have a life (0)",
                    "Occasionally check stories (5)",
                    "Daily scroll through their feed (8)",
                    "Know their posting schedule by heart (9)"
                ]
            },
            {
                q: "They touch your arm while talking. You...",
                options: [
                    "Don't even notice (0)",
                    "Think 'that was nice' (5)",
                    "Heart rate SPIKES instantly (8)",
                    "Replay it in your head for 3 days (9)"
                ]
            },
            {
                q: "You imagine your future together and...",
                options: [
                    "Literally never (0)",
                    "Once as a joke (5)",
                    "Sometimes when bored (8)",
                    "Have names picked for your kids/pets (9)"
                ]
            }
        ],
        passScore: 30,
        result: {
            title: '❌ Crush CRUSHED—Friendzoned?',
            desc: "Ouch! Or relief? Hard to tell. Either way, you're not quite vibing on that level yet.",
            tip: '💡 Tip: Flirt with compliments—science says it works 60% of the time!',
            gif: 'https://media.giphy.com/media/l41lG7dzr6qO9d0NO/giphy.gif'
        },
        passResult: {
            title: '✅ Crush Mode ACTIVATED! 💥',
            desc: "SPARKS! Is it love or just good lighting? Either way, someone's got butterflies!",
            tip: '🎯 Dare: Send a risky text. Fortune favors the bold!',
            gif: 'https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif'
        }
    },
    {
        title: 'Ultimate Bond 💞',
        desc: 'Unbreakable—soulmates or just chaotic good.',
        questions: [
            {
                q: "They know your...",
                options: [
                    "Name and that's it (0)",
                    "Order at the drive-thru (6)",
                    "Weird childhood trauma (8)",
                    "Deepest fears AND wildest dreams (10)"
                ]
            },
            {
                q: "Would they fight a bear for you?",
                options: [
                    "LOL absolutely not (0)",
                    "Maybe with a weapon (6)",
                    "Yes, but with snacks first (8)",
                    "Bare-handed, no hesitation, duh (10)"
                ]
            },
            {
                q: "You can communicate...",
                options: [
                    "Only through memes (0)",
                    "With words like normal people (6)",
                    "With just facial expressions (8)",
                    "Telepathically—it's freaky (10)"
                ]
            },
            {
                q: "If they died, you'd...",
                options: [
                    "Feel bad, move on (dark but honest) (0)",
                    "Cry at the funeral (6)",
                    "Never be the same (8)",
                    "Die WITH them (Romeo & Juliet style) (10)"
                ]
            },
            {
                q: "In 50 years, you'll...",
                options: [
                    "Not remember their last name (0)",
                    "Maybe still follow them online (6)",
                    "Still be friends somehow (8)",
                    "Be in matching rocking chairs, still roasting each other (10)"
                ]
            }
        ],
        passScore: 35,
        result: {
            title: '❌ Ultimate FAIL—Retry Life!',
            desc: "Almost legends... ALMOST. You're close but not quite at god-tier friendship. Keep grinding!",
            tip: '💡 Tip: Shared goals create forever bonds. Start a cult together (kidding... or am I?)',
            gif: 'https://media.giphy.com/media/26ufnwz3wDUllvH0U/giphy.gif'
        },
        passResult: {
            title: '✅ ULTIMATE BOND FORGED! 🏆',
            desc: "YOU'RE ETERNAL—world beware! This is the kind of friendship movies are made about!",
            tip: '🎯 Legend status: Create a custom handshake that takes 5 minutes.',
            gif: 'https://media.giphy.com/media/l0HlS9nIWnlnG3K8g/giphy.gif'
        }
    }
];

// Initialize
let currentQuoteIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
    cycleQuotes();
    setInterval(cycleQuotes, 3000);
});

function cycleQuotes() {
    const quotesDiv = document.querySelector('.quotes-carousel .quote');
    if (quotesDiv) {
        quotesDiv.textContent = landingQuotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex + 1) % landingQuotes.length;
    }
}

function startAdventure() {
    switchPage('landing', 'modeSelect');
}

function selectMode(mode) {
    currentMode = mode;
    switchPage('modeSelect', 'quiz');
    loadZone(0);
}

function loadZone(zoneIndex) {
    if (zoneIndex >= totalZones) {
        // All zones conquered!
        document.getElementById('resultTitle').textContent = '🌟 ALL ZONES CONQUERED! 🌟';
        document.getElementById('resultDesc').textContent = 'ULTIMATE FRIENDSHIP LEGEND UNLOCKED! You two are the stuff of myths and legends. Share your glory with the world!';
        document.getElementById('resultTip').textContent = '🏆 Final Wisdom: Cherish this bond—real connections are rarer than unicorns riding dinosaurs!';
        document.getElementById('resultGif').src = 'https://media.giphy.com/media/l0HlVP6FDzE0Q4zFO/giphy.gif';
        document.getElementById('nextBtn').style.display = 'none';
        showResults();
        return;
    }

    currentZone = zoneIndex;
    const zone = zones[zoneIndex];
    
    document.getElementById('zoneTitle').textContent = zone.title;
    document.getElementById('zoneDesc').textContent = zone.desc;
    document.getElementById('progress').textContent = `Zone ${zoneIndex + 1}/${totalZones} - Score ${zone.passScore}+ to advance!`;
    
    updateZoneTracker();
    generateQuestions(zone.questions);
}

function updateZoneTracker() {
    const zoneDots = document.querySelectorAll('.zone-dot');
    zoneDots.forEach((dot, index) => {
        dot.classList.remove('active', 'completed');
        if (index < currentZone) {
            dot.classList.add('completed');
        } else if (index === currentZone) {
            dot.classList.add('active');
        }
    });
}

function generateQuestions(questions) {
    const questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    score = 0;

    questions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        
        const questionText = document.createElement('div');
        questionText.className = 'question-text';
        questionText.textContent = `${index + 1}. ${question.q}`;
        questionDiv.appendChild(questionText);

        const optionsList = document.createElement('div');
        optionsList.className = 'options-list';

        question.options.forEach((option, optIndex) => {
            const label = document.createElement('label');
            label.className = 'option-label';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = option.match(/\((\d+)\)/)[1]; // Extract number from (X)
            
            const optionText = document.createElement('span');
            optionText.textContent = option;
            
            label.appendChild(radio);
            label.appendChild(optionText);
            optionsList.appendChild(label);
        });

        questionDiv.appendChild(optionsList);
        questionsDiv.appendChild(questionDiv);
    });
}

function submitZone() {
    let zoneScore = 0;
    const zone = zones[currentZone];

    // Calculate score
    zones[currentZone].questions.forEach((_, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected) {
            zoneScore += parseInt(selected.value);
        }
    });

    let result;
    let passed = false;

    if (zoneScore >= zone.passScore) {
        result = zone.passResult;
        passed = true;
    } else {
        result = zone.result;
    }

    // Display results
    document.getElementById('resultTitle').textContent = result.title;
    document.getElementById('resultDesc').textContent = result.desc;
    document.getElementById('resultTip').textContent = result.tip;
    document.getElementById('resultGif').src = result.gif;

    // Setup next button
    const nextBtn = document.getElementById('nextBtn');
    if (passed) {
        if (currentZone < totalZones - 1) {
            nextBtn.textContent = '➡️ HOP TO NEXT ZONE!';
            nextBtn.style.display = 'inline-block';
            nextBtn.onclick = () => {
                hideResults();
                loadZone(currentZone + 1);
            };
        } else {
            nextBtn.textContent = '🎊 CELEBRATE VICTORY!';
            nextBtn.style.display = 'inline-block';
            nextBtn.onclick = () => {
                alert('🏆 LEGENDARY STATUS ACHIEVED! You are friendship GODS!');
            };
        }
    } else {
        nextBtn.textContent = '🔄 RETRY THIS ZONE';
        nextBtn.style.display = 'inline-block';
        nextBtn.onclick = () => {
            hideResults();
            loadZone(currentZone);
        };
    }

    showResults();
}

function showResults() {
    switchPage('quiz', 'results');
}

function hideResults() {
    switchPage('results', 'quiz');
}

function nextZone() {
    hideResults();
    loadZone(currentZone + 1);
}

function restartAll() {
    currentZone = 0;
    currentMode = '';
    score = 0;
    switchPage('results', 'landing');
    cycleQuotes();
}

function shareResult() {
    const title = document.getElementById('resultTitle').textContent;
    const text = `I just reached "${title}" in ${currentMode === 'duo' ? 'Duo' : 'Solo'} mode! 😂🔥 Test your friendship at [your-website-url]`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Friendship Zone Hopper Results',
            text: text
        }).catch(err => console.log('Share failed:', err));
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('📋 Result copied to clipboard! Share it everywhere!');
        }).catch(() => {
            alert('Copy & share this: ' + text);
        });
    }
}

function switchPage(fromPage, toPage) {
    document.getElementById(fromPage).classList.remove('active');
    document.getElementById(toPage).classList.add('active');
}