import pluginSonarjs from 'eslint-plugin-sonarjs';

const sonarjs = pluginSonarjs.default ?? pluginSonarjs;
const baseRules = sonarjs.rules ?? {};

const isTerminatingStatement = (statement) => {
    if (!statement) {
        return false;
    }

    switch (statement.type) {
        case 'BreakStatement':
        case 'ReturnStatement':
        case 'ThrowStatement':
            return true;

        case 'BlockStatement':
            return statement.body.length > 0 && isTerminatingStatement(statement.body[0]);

        case 'IfStatement':
            return (
                isTerminatingStatement(statement.consequent) &&
                isTerminatingStatement(statement.alternate)
            );

        default:
            return false;
    }
};

const noOneIterationLoop = {
    meta: {
        type: 'suggestion',
        docs: {
            description: 'Disallow loops that can execute only one iteration.',
        },
        schema: [],
    },
    create(context) {
        const checkLoop = (node) => {
            const body = node.body?.type === 'BlockStatement' ? node.body.body : [node.body];
            const [firstStatement] = body;

            if (!isTerminatingStatement(firstStatement)) {
                return;
            }

            context.report({
                node,
                message: 'Refactor this loop to avoid executing only one iteration.',
            });
        };

        return {
            ForStatement: checkLoop,
            ForInStatement: checkLoop,
            ForOfStatement: checkLoop,
            WhileStatement: checkLoop,
            DoWhileStatement: checkLoop,
        };
    },
};

export default {
    plugins: {
        sonarjs: {
            ...sonarjs,
            rules: {
                ...baseRules,
                'no-one-iteration-loop': baseRules['no-one-iteration-loop'] ?? noOneIterationLoop,
            },
        },
    },
    rules: {
        'sonarjs/no-extra-arguments': ['error'],
        'sonarjs/no-all-duplicated-branches': ['error'],
        'sonarjs/no-element-overwrite': ['error'],
        'sonarjs/no-identical-conditions': ['error'],
        'sonarjs/no-identical-expressions': ['error'],
        'sonarjs/no-one-iteration-loop': ['error'],
        'sonarjs/no-use-of-empty-return-value': ['error'],
        'sonarjs/no-collapsible-if': ['error'],
        'sonarjs/no-duplicate-string': ['error'],
        'sonarjs/no-duplicated-branches': ['error'],
        'sonarjs/no-identical-functions': ['error'],
        'sonarjs/no-inverted-boolean-check': ['error'],
        'sonarjs/no-redundant-boolean': ['error'],
        'sonarjs/no-redundant-jump': ['error'],
        'sonarjs/no-same-line-conditional': ['error'],
        'sonarjs/prefer-immediate-return': ['error'],
        'sonarjs/prefer-single-boolean-return': ['error'],
    },
};
