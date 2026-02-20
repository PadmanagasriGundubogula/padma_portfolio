import { Star, Mic, BookOpen, Trophy, ChevronRight } from 'lucide-react';

const toastmasterLevels = [
    { level: 'Level 1', title: 'Mastering Fundamentals', certificate: '/certificates/l1 presentation mastery.pdf' },
    { level: 'Level 2', title: 'Learning Your Style', certificate: '/certificates/l2 presentation mstery.pdf' },
    { level: 'Level 3', title: 'Increasing Knowledge', certificate: '/certificates/l3 presentation mastery.pdf' },
    { level: 'Level 4', title: 'Building Skills', certificate: '/certificates/l4 presentation mastery.pdf' },
    { level: 'Level 5', title: 'Demonstrating Expertise', certificate: '/certificates/l5 presentation mastery.pdf' },
];

const ActivitiesSection = () => {
    return (
        <section id="activities" className="py-20 md:py-28 px-4 bg-gradient-to-b from-background to-secondary/30">
            <div className="container mx-auto">
                <div className="max-w-6xl mx-auto">
                    {/* Section Header */}
                    <div className="flex items-center gap-4 mb-12">
                        <Star className="w-6 h-6 text-primary" />
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            Other Activities
                        </h2>
                        <div className="flex-1 h-px bg-border" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">

                        {/* Toastmasters Card */}
                        <div className="rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden border border-border">
                            {/* Header */}
                            <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 p-6 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <Mic className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Toastmasters International</h3>
                                        <p className="text-white/80 text-sm">Presentation Mastery Path — Completed ✅</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Trophy className="w-4 h-4 text-yellow-200" />
                                    <span className="text-sm text-white/90 font-medium">All 5 Levels Completed</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    Completed the entire <span className="text-foreground font-medium">Presentation Mastery Path</span> in
                                    Toastmasters International, progressing through all 5 levels. This path focuses on developing
                                    advanced presentation skills, storytelling, persuasive speaking, and building stage presence.
                                    Each level builds upon the last, culminating in expert-level public speaking and communication abilities.
                                </p>

                                {/* Toastmaster Certificate Image */}
                                <div className="mb-5 rounded-xl overflow-hidden border border-border shadow-soft">
                                    <img
                                        src="/certificates/Adobe Scan 10-Sept-2023 (4)_1.jpg"
                                        alt="Toastmasters Certificate"
                                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Levels Progress */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Levels Completed</p>
                                <div className="space-y-2">
                                    {toastmasterLevels.map((item, index) => (
                                        <a
                                            key={item.level}
                                            href={item.certificate}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                    {item.level}: {item.title}
                                                </p>
                                            </div>
                                            <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    ))}
                                </div>

                                {/* Additional Toastmaster Achievements */}
                                <div className="mt-4 pt-4 border-t border-border">
                                    <a
                                        href="/certificates/triple crown award.jpg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <Trophy className="w-5 h-5 text-amber-500" />
                                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                            Triple Crown Award 🏆
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NxtWave Card */}
                        <div className="rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden border border-border">
                            {/* Header */}
                            <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-6 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">NxtWave Learning</h3>
                                        <p className="text-white/80 text-sm">Consistent Coding & Skill Development</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Star className="w-4 h-4 text-yellow-200" />
                                    <span className="text-sm text-white/90 font-medium">3-Week Consistent Coding Badge</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    Actively learning and building skills through <span className="text-foreground font-medium">NxtWave's CCBP 4.0</span> platform.
                                    Earned the <span className="text-primary font-medium">3rd Week Coding Badge</span> for maintaining
                                    consistent daily coding practice for 3 consecutive weeks. This dedication to continuous learning
                                    covers web development technologies including HTML, CSS, JavaScript, React, and Python.
                                </p>

                                {/* Badge Image */}
                                <div className="mb-5 rounded-xl overflow-hidden border border-border shadow-soft">
                                    <img
                                        src="/certificates/3rd week badge.png"
                                        alt="NxtWave 3rd Week Coding Badge"
                                        className="w-full h-48 object-contain bg-secondary/30 p-4 hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Skills Learned */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Courses & Certifications</p>
                                <div className="space-y-2">
                                    <a
                                        href="/certificates/uiux certificate.jpg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">🎨</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">UI/UX Development</p>
                                            <p className="text-xs text-muted-foreground">Design Fundamentals & Prototyping</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a
                                        href="/certificates/static web certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">🌐</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Static Website Development</p>
                                            <p className="text-xs text-muted-foreground">HTML, CSS & Responsive Design</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a
                                        href="/certificates/css and java certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">☕</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">CSS & JavaScript</p>
                                            <p className="text-xs text-muted-foreground">Interactive Web Development</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a
                                        href="/certificates/python certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">🐍</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Python Programming</p>
                                            <p className="text-xs text-muted-foreground">Core Python & Data Structures</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>
                                </div>

                                {/* Highlight */}
                                <div className="mt-5 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-primary/20">
                                    <p className="text-sm text-foreground font-medium flex items-center gap-2">
                                        🔥 Consistent coder — 3 weeks of daily practice and counting!
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ActivitiesSection;
