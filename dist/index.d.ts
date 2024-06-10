type SayHelloProp = {
    fisrName: string;
    lastName?: string;
    age?: number;
};

declare function sayhello({ fisrName, lastName, age }: SayHelloProp): void;

export { type SayHelloProp, sayhello };
