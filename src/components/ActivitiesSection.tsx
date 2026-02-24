import { Star, Mic, BookOpen, Trophy, ChevronRight } from 'lucide-react';

const toastmasterLevels = [
    { level: 'Level 1', title: 'Mastering Fundamentals', certificate: './certificates/l1 presentation mastery.pdf' },
    { level: 'Level 2', title: 'Learning Your Style', certificate: './certificates/l2 presentation mstery.pdf' },
    { level: 'Level 3', title: 'Increasing Knowledge', certificate: './certificates/l3 presentation mastery.pdf' },
    { level: 'Level 4', title: 'Building Skills', certificate: './certificates/l4 presentation mastery.pdf' },
    { level: 'Level 5', title: 'Demonstrating Expertise', certificate: './certificates/l5 presentation mastery.pdf' },
];

const nxtwaveCycles = [
    { cycle: 'Cycle 1', title: 'Projects Champ', status: 'Completed', progress: '100%' },
    { cycle: 'Cycle 2', title: 'Programming Master', status: 'In Progress (SQL Done)', progress: '65%' },
    { cycle: 'Cycle 3', title: 'Dynamic Websites Creator', status: 'In Progress', progress: '39%' },
    { cycle: 'Cycle 4', title: 'Full Stack Foundations', status: 'Upcoming', progress: '0%' },
    { cycle: 'Cycle 5', title: 'Full Stack Advanced', status: 'Upcoming', progress: '20%' },
    { cycle: 'Cycle 6', title: 'Elementary CP', status: 'Upcoming', progress: '36%' },
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
                            <div className="bg-gradient-to-br from-blue-800 via-blue-900 to-slate-900 p-6 text-white">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                        <Mic className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">Toastmasters International</h3>
                                        <p className="text-white/80 text-sm">Presentation Mastery Path — Completed ✅</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Trophy className="w-4 h-4 text-yellow-300" />
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

                                {/* Toastmasters International Logo */}
                                <div className="mb-5 rounded-xl overflow-hidden border border-border shadow-soft bg-transparent flex items-center justify-center aspect-video">
                                    <img
                                        src="./download.jpg"
                                        alt="Toastmasters International"
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
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
                                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-sm">
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
                                        href="./certificates/triple crown award.jpg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <Trophy className="w-5 h-5 text-yellow-500" />
                                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                            Triple Crown Award 🏆
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NxtWave Card */}
                        <div className="rounded-2xl bg-card shadow-soft hover:shadow-card transition-all duration-300 overflow-hidden border border-border flex flex-col">
                            {/* Header */}
                            <div className="bg-gradient-to-br from-blue-500 via-indigo-500 to-violet-500 p-6 text-white shrink-0">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/20">
                                        <BookOpen className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">NxtWave Learning</h3>
                                        <p className="text-white/80 text-sm">CCBP 4.0 Academy Program</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <Star className="w-4 h-4 text-yellow-200" />
                                    <span className="text-sm text-white/90 font-medium">Growth Cycle 1 Completed</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 flex-1 flex flex-col">
                                <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                                    Actively learning and building skills through <span className="text-foreground font-medium">NxtWave's CCBP 4.0</span> platform.
                                    The curriculum consists of <span className="text-primary font-medium">6 Growth Cycles</span>, each packed with specialized sub-courses.
                                    Successfully completed <span className="text-foreground font-medium">Growth Cycle 1</span> and SQL in Cycle 2, currently working towards earning the Python certification.
                                </p>

                                {/* NxtWave Logo */}
                                <div className="mb-5 rounded-xl overflow-hidden shadow-soft flex items-center justify-center aspect-video relative group border border-border shrink-0">
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                                    <img
                                        src="./nxtwave-original.webp"
                                        alt="NxtWave Badge"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                {/* Growth Cycles */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Growth Cycles Journey</p>
                                <div className="space-y-2 mb-6">
                                    {nxtwaveCycles.map((item, index) => (
                                        <div
                                            key={item.cycle}
                                            className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                        >
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-sm ${item.status.includes('Completed') ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white' : item.status.includes('In Progress') ? 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white' : 'bg-secondary text-muted-foreground border border-border'
                                                }`}>
                                                {index + 1}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                        {item.title}
                                                    </p>
                                                    <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${item.status.includes('Completed') ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                                                        item.status.includes('In Progress') ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' :
                                                            'bg-secondary text-muted-foreground'
                                                        }`}>
                                                        {item.progress}
                                                    </span>
                                                </div>
                                                <p className="text-xs text-muted-foreground">{item.status}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Certificates */}
                                <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 mt-auto">Certifications & Events</p>
                                <div className="space-y-2">
                                    <a
                                        href="./certificates/sql_certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">🗄️</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">SQL Fundamentals</p>
                                            <p className="text-xs text-muted-foreground">Introduction to Databases</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <a
                                        href="./certificates/responsive_web_certificate.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200"
                                    >
                                        <span className="text-lg">📱</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">Responsive Web Design</p>
                                            <p className="text-xs text-muted-foreground">Building mobile-first applications</p>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </a>

                                    <div className="group flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/80 transition-all duration-200 cursor-default">
                                        <span className="text-lg">🎙️</span>
                                        <div className="flex-1">
                                            <p className="text-sm font-medium text-foreground transition-colors">Events, Workshops & Podcasts</p>
                                            <p className="text-xs text-muted-foreground">Actively participating & earning certificates</p>
                                        </div>
                                    </div>
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
